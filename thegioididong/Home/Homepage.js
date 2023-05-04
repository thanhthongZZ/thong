$(function () {
  console.log('abc')
      loadComponent();
    //   Thực hiện Delay quá trình load dữ liệu DS sản phẩm để đợi các thành phần trang web load hoàn chỉnh

    setTimeout(() => {
            featchListProduct();
          }, 200);
    });
    // Load các thành phần của trang Home Page
    function loadComponent(params) {
        $(".MenuSection").load("./Menu.html");
        $(".BannerSection").load("./Banner.html");
        $(".ProductsSection").load("./Products.html");
        $(".FooterSection").load("./Footer.html");
    }
    
    // Hàm lấy dữ liệu, Generate các sản phẩm
    function featchListProduct(params) {
          for (let index = 0; index < 8; index++) {
            $(".ProductsList").append(`
            <!-- SP 1 -->
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: left">
            <!-- Ảnh -->
            <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3 style="font-weight: bold">Iphon 14</h3>
            </div>
          </div>
        </div>
        <!-- Hãng sản xuất -->
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h4>Hãng sản xuất: Apple</h4>
          </div>
        </div>
        <!-- Đánh giá  -->
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px">
              <li>
                <i class="fa fa-star selected" style="color: orange"></i>
              </li>
              <li>
                <i class="fa fa-star selected" style="color: orange"></i>
              </li>
              <li>
                <i class="fa fa-star selected" style="color: orange"></i>
              </li>
              <li>
                <i class="fa fa-star"></i>
              </li>
              <li>
                <i class="fa fa-star"></i>
              </li>
            </ul>
          </div>
        </div>
         <!-- Thêm vào giỏ hàng  -->
         <div class="row">
          <div class="col-sm-4 col-md-4 col-lg-4">
            <h4>29.490.000₫</h4>
          </div>
          
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button type="button" class="btn btn-default" style="border: 0px">
              <i class="fa fa-shopping-cart" style="color: red; font-size: 35px"></i>
            </button>
          </div>
        </div>
        <br />
      <br />
      <br />
    </div>
    `);
  }
}