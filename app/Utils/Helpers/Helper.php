<?php
namespace App\utils\Helpers;
use Carbon\Carbon;
use App\Models\Post;
use App\Models\User;
use App\Models\Order;
use App\Models\Basket;
use App\Models\Custom;
use App\Models\Comment;
use App\Models\Gallery;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class Helper
{

  public function __construct()
  {
    $this->Helper = Helper::class;
    $this->user = Auth::user();

  }


  public static function PostImageHelper($url, $image, $path)
  {
    if (strlen($image) < 255) {
      return $image;
    }


    $extension = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];   // .jpg .png .pdf

    $replace = substr($image, 0, strpos($image, ',') + 1);


    $imageConvert = str_replace($replace, '', $image);

    $imageConvert = str_replace(' ', '+', $imageConvert);

    $imageName = $url . '_' . time() . '.' . $extension;

    $destinationPath = public_path('/images/' . $path . '/');

    $img = Image::make($image);


    File::exists($destinationPath) or File::makeDirectory($destinationPath, 0777, true, true);

    $img->resize(800, 800, function ($constraint) {
        $constraint->aspectRatio();
    })->save($destinationPath.'/'.$imageName);


    $imageUrl =  '/images/' . $path . '/' . $imageName;



    return $imageUrl;

  }

  public static function siteImageHelper($url, $image, $path)
  {
    if (strlen($image) < 255) {
      return $image;
    }


    $extension = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];   // .jpg .png .pdf

    $replace = substr($image, 0, strpos($image, ',') + 1);


    $imageConvert = str_replace($replace, '', $image);

    $imageConvert = str_replace(' ', '+', $imageConvert);

    $imageName = $url . '_' . time() . '.' . $extension;

    $destinationPath = public_path('/images/' . $path . '/');

    $img = Image::make($image);


    File::exists($destinationPath) or File::makeDirectory($destinationPath, 0777, true, true);

    $img->resize(1920, 520, function ($constraint) {
        $constraint->aspectRatio();
    })->save($destinationPath.'/'.$imageName);


    $imageUrl =  '/images/' . $path . '/' . $imageName;



    return $imageUrl;

  }



  public static function PostVideoHelper($url, $video, $path)
  {

    if (strlen($video) < 255) {
      return $video;
    }
    $extension = explode('/', explode(':', substr($video, 0, strpos($video, ';')))[1])[1];   // .jpg .png .pdf


    $replace = substr($video, 0, strpos($video, ',') + 1);


    $imageConvert = str_replace($replace, '', $video);

    $imageConvert = str_replace(' ', '+', $imageConvert);

    $imageName = $url . '_' . time() . '.' . $extension;

    Storage::disk('public')->put('/images/' . $path . '/' . $imageName, base64_decode($imageConvert));

    $imageUrl = env('APP_URL') . '/storage/app/public/images/' . $path . '/' . $imageName;


    return $imageUrl;

  }

  public static function MakeUrl($string)
  {

    //Türkçeye özgü harfleri değiştirme
    $string = str_replace('ü', 'u', $string);
    $string = str_replace('Ü', 'U', $string);

    $string = str_replace('ğ', 'g', $string);
    $string = str_replace('Ğ', 'G', $string);

    $string = str_replace('ş', 's', $string);
    $string = str_replace('Ş', 'S', $string);

    $string = str_replace('ç', 'c', $string);
    $string = str_replace('Ç', 'C', $string);

    $string = str_replace('ö', 'o', $string);
    $string = str_replace('Ö', 'O', $string);

    $string = str_replace('ı', 'i', $string);
    $string = str_replace('İ', 'I', $string);

    $slug = preg_replace('/[^A-Za-z0-9-]+/', '-', strtolower($string));


    return $slug;
  }


  public static function namedSettings($settings)
  {
    $named_settings = [];
    foreach ($settings as $setting) {
      $named_settings[$setting->name] = $setting;
    }
    return $named_settings;
  }


    public static function findProduct ($id) {
        $lawyer = Post::where('slug', $id)->firstOrFail();
        return $lawyer;
    }

    public static function findServices ($id) {
        $services = Post::where('user_id', $id)->where('type','service')->get();
        return $services;
    }

    public static function findServiceswithoutId () {
        $services = Post::where('type','service')->get();
        return $services;
    }

    public static function findServiceswithoutId5 () {
        $services = Post::where('type','service')->limit(5)->get();
        return $services;
    }

    public static function htmlEntityWithSubStr ($str, int $first, int $last) {
        $string = htmlspecialchars($str);
        $string2 = htmlspecialchars($string);
        $sub =   mb_substr($string, $first, $last);
        return $string2;
    }

    public static function findPosts ($id) {
        $posts = Post::where('user_id', $id)->where('type','post')->get();
        return $posts;
    }

    public static function findOrders ($id) {
        $orders = Order::where('user_id',$id)->orderBy('created_at', 'desc')->get();
        return $orders;
    }
    public static function findBlog ($url) {
        $posts = Post::where('slug', $url)->where('type','post')->first();
        return $posts;
    }

    public static function findFollowers ($id) {
        $lawyer = User::where('id', $id)->firstOrFail();
        return $lawyer->followers;
    }

    // public static function findUserComments ($id) {
    //     $lawyer = User::where('id', $id)->firstOrFail();
    //     $comments =UserComment::where('to',$id)->get();
    //     return $comments;
    // }

    // public static function amIFollowingThis ($id) {
    //     $lawyer = User::where('id', $id)->firstOrFail();
    //     $isfollowing = Auth::user()->isFollowing($lawyer);
    //     return $isfollowing;
    // }

    public static function ageCalculator ($date) {
        return Carbon::parse($date)->age;;
    }
    public static function wishlist($user){
      $data = Basket::where('type','wish')->where('user_id',$user)->get();
      return $data;
    }


    public static function diffForHumans ($created_at) {
        $now = Carbon::now();
        $difference = $created_at->diff($now)->days;
        return $difference;
      }


    //CREATE ONCE A MONTH CRONJOB FOR DELETE
    // public static function SearchHistory () {
    //     $SearchHistory = UserSearch::select('key','search')->distinct()->paginate(10);
    //     return  $SearchHistory ;
    // }
    public static function total_amount_for_payment($user){
      $data= Basket::where('user_id',$user->id)->where('type','product')->where('sold',false)->get();
      $total = 0;
      foreach ($data as $item){
          if (isset($item->discounted_price)){
              $total+= $item->discounted_price*$item->quantity;
          }else{
              $total+= $item->price*$item->quantity;
          }
      }
      return $total;
    }
    public static function related_post($post_id){
      $current_post = Post::find($post_id);
       $data =  Post::where('type','post')->where('title','LIKE','%'.$current_post->title[0].'%')->where('content','like','%'.$current_post->title[0].'%')->orWhere('type','post')->limit(3)->get();
       return $data;
    }
    public static function all_posts(){
      $data = Post::where('type','post')->orderBy('created_at','desc')->get();
      return $data;
    }


    public static function findCategoryPosts ($url) {

        $category = Category::where('slug',$url)->first();//ürünün kategorisi alındı
        if (!isset($category)){
            return Post::where('type','product')->get();
        }
        if ($category->parent_id == 1){
            $childsId = Category::where('parent_id',$category->id)->pluck('id');
            $childsProducts = Post::whereIn('category_id',$childsId)->get();
            $targetCategoryProducts = Post::where('category_id',$category->id)->get();
            $merged = $childsProducts->merge($targetCategoryProducts);
            return $merged;
        }
        $allParentIdsCategories = Category::where('parent_id',$category->parent_id)->get();
        $allChildIdsCategories = Category::where('parent_id',$category->id)->get();
        $merged = $allParentIdsCategories->merge($allChildIdsCategories);
        $catProducts = Post::where('type','product')->whereIn('category_id',$merged)->get();
        return $catProducts;
    }

    public static function relatedProducts ($id) {

        $related_products = Post::where('title','LIKE','%'.strtok($id).'%')->where('type','product')
        ->orWhere('content','LIKE','%'.strtok($id).'%')->where('type','product')->limit(5)->get();

        return $related_products ;
    }

    public static function products_in_category($product){
        $data = Post::find($product->id);

    }
    public  static  function main_categories (){
        $main_categories = Category::where('parent_id','1')->get();
        return $main_categories;
    }
    public static function subCategory($category_id){
        $sub_category = Category::where('parent_id',$category_id)->get();
        return $sub_category;
    }
    public static function hasChild($category_id){
        $sub_category = Category::where('parent_id',$category_id)->get();
        return $sub_category;
    }

    public static function jsonToArray ($data) {
        $newData =  json_decode($data, true);
        return  $newData ;
      }

    public static function jsonToObject ($data) {
        $newData =  (object)json_decode($data, true);
        return  $newData ;
      }


      public static function guestBasketControl($id,$qty){
        $qty = $qty === null ? 1 : $qty;
        $product = Post::find($id);


        $cart = session()->get('cart');
        if (!$cart){
            $price = 0;
            if(isset($product->discounted_price)){
                $price = $product->discounted_price;
            }else{
                $price = $product->price;
            }

            $cart = [
                $id => collect([
                            "id"=>$product->id,
                            "quantity" => $qty,
                            "price" => $price,
                            "post"=>$product,
                        ])
            ];
            return $cart;
        }
        if(isset($cart[$id])) {
            $cart[$id]['quantity'] = $cart[$id]['quantity'] + $qty;
            return $cart;
        }

        $price = 0;
        if(isset($product->discounted_price)){
            $price = $product->discounted_price;
        }else{
            $price = $product->price;
        }
        $cart[$id] = collect([
                        "id"=>$product->id,
                        "quantity" => $qty,
                        "price" => $price,
                        "post"=>$product,
                         ]);

        return  $cart ;
      }

      public static function userBasketControl ($user,$id,$qty) {
        $qty = $qty === null ? 1 : $qty;
        $is_exist = Basket::where('user_id',$user->id)
        ->where('post_id',$id)
        ->where('sold',false)->where('type','product')->first();
        if($is_exist){
            $is_exist->quantity = $is_exist->quantity + $qty;
            $is_exist->save();
            return $is_exist;
        }else {
            $data = new Basket();
            $data->user_id = $user->id;
            $data->post_id = $id;
            $data->save();
            return $data;
      }
    }


    public static function findCustomData ($type) {

        $dataUsingOnBlade = '';
        $data = Custom::where('type', $type)->first();

        if($data === null){
            return null;
        }else{
            $dataUsingOnBlade =  json_decode($data->JsonData, true);
            $dataUsingOnBlade = $dataUsingOnBlade[$type];
        }
        return $dataUsingOnBlade ;
    }



    /*public static function isNewProduct($productId){
      $data = Post::find($productId);
      dd($data);
    }*/


    public static function cart() {
        $user = Auth::user();
        $cart = '';
        if($user){
            $sessionCart = session()->get('cart');
            $dbCart = Basket::where('user_id',$user->id)
            ->where('sold',false)->where('type','product')->get();
            $cart = $dbCart ? $dbCart : $sessionCart;
        }else{
            $cart = session()->get('cart');
        }

        return $cart;
    }

    public static function cartTotal() {

        $user = Auth::user();
        $totalAmount = 0;
        $price = 0;
        if($user){
            $cart = Basket::where('user_id',$user->id)->where('sold',false)->where('type','product')->get();
            if($cart){
                foreach ($cart as $key => $product) {
                    if(isset($product->post->discounted_price)){
                        $price = $product->post->discounted_price;
                    }else{
                        $price = $product->post->price;
                    }
                    $totalAmount += $price * $product['quantity'];
                }
            }

        }else{
            $cart = session()->get('cart');
           if($cart){
            foreach ($cart as $key => $product) {
                if(isset($product['post']->discounted_price)){
                    $price = $product['post']->discounted_price;
                }else{
                    $price = $product['post']->price;
                }
                $totalAmount += $price * $product['quantity'];
            }
           }
        }


        return $totalAmount;
    }



    public static function toEmptyCart() {
        $user = Auth::user();
        $cart = '';
        if($user){
            $cart = Basket::where('user_id',$user->id)->where('sold',false)->where('type','product')->get();
            foreach ($cart as $key => $item) {
                $item->sold = true;
                $item->save();
            }
        }else{
            $cart = session()->remove('cart');
        }

        return $cart;
    }

    public static function singleCategory($category_id){
      return Post::where('category_id', $category_id)->limit(16)->get();
    }

    public static function randomProducts(){
      return Post::where('type','product')->inRandomOrder()->get();
    }
    public static function randomPartners(){
        return User::where('role','user')->inRandomOrder()->get();
    }
    public static function urlToCategory($itemId){
        return Category::where('slug',$itemId)->first();
    }
    public static function getGallery(){
      return Gallery::paginate(8);
    }
    public static function indirimliUrunler(){
      return Post::where('type','product')->whereNotNull('discounted_price')->get();
    }

    public static function isNewProduct($productId){
        $lastMonthProducts = Post::recent()->where('id',$productId)->first();
        if ($lastMonthProducts){
            return true;
        }
        return false;
    }
    public static function getReferances(){
        return  Custom::all();
    }
    public static function recentPosts($limit){
        return Post::wherE('type','post')->orderBy('created_at','desc')->limit($limit)->get();
    }
    public static  function getCurrentUrl() {
        $data =  (explode('/', url()->current()));
        if (count($data)<4){
            return 'anasayfa';
        }
        return $data[3];
    }

    public static function getAllBlogs(){
        return Post::where('type','post')->get();
    }
    public static function getDateForHuman($postDate,$makeArray = 0){
        $dateFull = Carbon::parse($postDate)->format('d F Y');
        if ($makeArray){
            $dateArray = explode(" ",$dateFull);
            return $dateArray;
        }
        return $dateFull;
    }
    public static function blogsBelognsToPartner($partner_id){
        return Post::where('type','post')->where('user_id',$partner_id)->get();
    }
    public static  function getComments($id,$isPartnerPage){
        if ($isPartnerPage){
           return \App\Models\Comment::where('partner_id',$id)->where('reply_to',null)->get();
        }
        return \App\Models\Comment::where('post_id',$id)->where('reply_to',null)->get();
    }
    public static function getChildComments($commentId){
        return Comment::where('reply_to',$commentId)->get();
    }
    public static function getPostPoints($postId){
        return Comment::where('post_id',$postId)->whereNotNull('point')->get();

    }

    public static function getPartnerPointAvarage($userId){
        $data = Comment::where('partner_id',$userId)->whereNotNull('point')->get();
        if (!$data->isEmpty()) {
            $temp = 0;
            foreach ($data as $vote) {
                $temp+= $vote->point;
            }
            return substr($temp/count($data),0,3);
        }
        return 0;
    }
    public static function canVotePartner($partnerId){
        $data = Comment::where('user_id',\auth()->user())->where('partner_id',$partnerId)->first();
        if (\auth()->user()->id === $partnerId or $data==null){
            return false;
        }
        return true;
    }
    public static function canVotePost($postId){
        $data = Comment::where('user_id',\auth()->user())->where('post_id',$postId)->first();
        if (\auth()->user()->id === $postId or $data==null){
            return false;
        }
        return true;
    }
    public static function popularPartners(){
        return  Comment::whereNotNull('point')->whereNotNull('partner_id')->selectRaw('AVG(point) average')->groupBy('partner_id')->get();

    }
    public static function getPopularPartners(){
        return User::where('role','user')->withCount('comments')->orderBy('comments_count', 'desc')->get();
    }


}
