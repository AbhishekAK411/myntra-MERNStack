import React from 'react'
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
        <div id="screen">
        <div id="navbar">
            <div>
                <img src="https://images.indianexpress.com/2021/01/myntra.png" alt="myntra-logo" />
            </div>
            <div>
                <div>
                    <h4>MEN</h4>
                </div>
                <div>
                    <h4>WOMEN</h4>
                </div>
                <div>
                    <h4>KIDS</h4>
                </div>
                <div>
                    <h4>HOME & LIVING</h4>
                </div>
                <div>
                    <h4>BEAUTY</h4>
                </div>
                <div>
                    <h4>STUDIO</h4>
                </div>
            </div>
            <div>
                <input placeholder="Search for Products,brands and more" type="text" />
            </div>
            <div>
                <div>
                    <i class="fa-regular fa-user"></i>
                    <h5>Profile</h5>
                </div>
                <div>
                    <i class="fa-regular fa-heart"></i>
                    <h5>Wishlist</h5>
                </div>
                <div>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <h5>Bag</h5>
                </div>
            </div>
        </div>

        <div id="division">
            <p>Home / Clothing / <b>Men T-Shirts</b></p>
            <p><b>Men T-shirts</b> - 84295 items</p>
        </div>

        <div id="context">
            <div id="filters">Filters</div>
            <div id="options">
                <div>
                    <select name="bundles">
                        <option>Bundles</option>
                        <option>Single Styles</option>
                    </select>
                </div>
                <div>
                    <select name="Country of Origin">
                        <option>All Countries</option>
                        <option>India</option>
                    </select>
                </div>
                <div>
                    <select name="Size">
                        <option>Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
            </div>
            <div id="sort-by">
                <select name="Sort-By">
                    <option><b>Sort By</b> - Recommended</option>

                </select>
            </div>
        </div>

        <div id="main">
            <div>
                <div>
                    <h4>Categories</h4>
                    <input type="radio" id="HTML" name="Tshirts" value="Tshirts" />
                    <label for="HTML">Tshirts</label><br/>
                    <input type="radio" id="HTML1" name="Lounge Tshirts" value="Lounge Tshirts" />
                    <label for="HTML1">Lounge Tshirts</label>
                </div>
                <div id="border"></div>
                <div>
                    <h4>Brand</h4>
                    <input type="radio" id="html3" name="Roadster" value="roadster" />
                    <label for="html3">Roadster</label>
                    <br/>
                    <input type="radio" id="html4" name="Tommy Hilfiger" value="Tommy Hilfiger" />
                    <label for="html4">Tommy Hilfiger</label>
                    <br/>
                    <input type="radio" id="html5" name="Roadster" value="roadster" />
                    <label for="html5">U.S. Polo Assn.</label>
                    <br/>
                    <input type="radio" id="html6" name="Roadster" value="roadster" />
                    <label for="html6">Friskers</label>
                    <br/>
                    <input type="radio" id="html7" name="Roadster" value="roadster" />
                    <label for="html7">Jack & Jones</label>
                    <br/>
                    <input type="radio" id="html8" name="Roadster" value="roadster" />
                    <label for="html8">WROGN</label>
                    <br/>
                </div>
                <div id="border"></div>
                <div>
                    <h4>Price</h4>
                    <input type="radio" id="html9" name="price1" value="price1" />
                    <label for="html9">Rs. 149 to Rs. 3812</label>
                    <br/>
                    <input type="radio" id="html10" name="price2" value="price2" />
                    <label for="html10">Rs. 149 to Rs. 3812</label>
                    <br/>
                    <input type="radio" id="html11" name="price3" value="price3" />
                    <label for="html11">Rs. 149 to Rs. 3812</label>
                    <br/>
                    <input type="radio" id="html12" name="price4" value="price4" />
                    <label for="html12">Rs. 149 to Rs. 3812</label>
                    <br/>
                </div>
                <div id="border"></div>
                <div id="color">
                    <h4>Color</h4>
                    <input type="radio" id="html13" name="color1" value="color1" />
                    <i class="fa-solid fa-circle"></i>
                    <label for="html13">Black</label>
                    <br/>
                    <input type="radio" id="html14" name="color2" value="color2" />
                    <i class="fa-solid fa-circle"></i>
                    <label for="html14">Blue</label>
                    <br/>
                    <input type="radio" id="html15" name="color3" value="color3" />
                    <i class="fa-regular fa-circle"></i>
                    <label for="html15">White</label>
                    <br/>
                    <input type="radio" id="html16" name="color4" value="color4" />
                    <i class="fa-solid fa-circle"></i>
                    <label for="html16">Navy Blue</label>
                    <br/>
                    <input type="radio" id="html17" name="color5" value="color5" />
                    <i class="fa-solid fa-circle"></i>
                    <label for="html17">Green</label>
                    <br/>
                    <input type="radio" id="html18" name="color6" value="color6" />
                    <i class="fa-solid fa-circle"></i>
                    <label for="html18">Red</label>
                    <br/>
                    <input type="radio" id="html19" name="color7" value="color7" />
                    <i class="fa-solid fa-circle"></i>
                    <label for="html19">Grey</label>
                    <br/>
                    <h5>+39 more</h5>
                </div>
                <div id="border"></div>
                <div id="discount">
                    <h4>Discount Range</h4>
                    <h4></h4>
                    <input type="radio" id="html20" name="discount1" value="discount1" />
                    <label for="html20">10% and above</label>
                    <br />
                    <input type="radio" id="html21" name="discount2" value="discount2" />
                    <label for="html21">20% and above</label>
                    <br/>
                    <input type="radio" id="html22" name="discount3" value="discount3" />
                    <label for="html22">30% and above</label>
                    <br/>
                    <input type="radio" id="html23" name="discount4" value="discount4" />
                    <label for="html23">40% and above</label>
                    <br/>
                    <input type="radio" id="html24" name="discount5" value="discount5" />
                    <label for="html24">50% and above</label>
                    <br/>
                    <input type="radio" id="html25" name="discount6" value="discount6" />
                    <label for="html25">60% and above</label>
                    <br/>
                    <input type="radio" id="html26" name="discount7" value="discount7" />
                    <label for="html26">70% and above</label>
                    <br/>
                    <input type="radio" id="html27" name="discount8" value="discount8" />
                    <label for="html27">80% and above</label>
                    <br/>
                </div>
            </div>

            <div id="right">
                <div id="myntra_insert">
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="product-image" />
                        <h4>HERE&NOW</h4>
                        <p>Polo Collar Cotton Pure Cott...</p>
                        <h5>Rs. 441 <s>Rs.1299</s> <b>(66% off)</b></h5>
                    </div>
                </div>
            </div>


        </div>

        <div id="footer">
            <div>


                <div>
                    <h4>online shopping</h4>
                    <h5>Men</h5>
                    <h5>Women</h5>
                    <h5>Kids</h5>
                    <h5>Home & Living</h5>
                    <h5>Beauty</h5>
                    <h5>Gift Cards</h5>
                    <h5>Myntra Insider</h5>

                    <h4>useful links</h4>
                    <h5>Blog</h5>
                    <h5>Careers</h5>
                    <h5>Site Map</h5>
                    <h5>Corporate Information</h5>
                    <h5>Whitehat</h5>
                </div>


                <div>
                    <h4>Customer Policies</h4>
                    <h5>Contact Us</h5>
                    <h5>FAQ</h5>
                    <h5>T&C</h5>
                    <h5>Terms of Use</h5>
                    <h5>Track orders</h5>
                    <h5>Shipping</h5>
                    <h5>Cancellation</h5>
                    <h5>Returns</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Grievance Officer</h5>
                </div>


                <div>
                    <h4>Experience Myntra App on mobile</h4>
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="android-img" />
                        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="ios-image" />
                    </div>
                    <h4>Keep in Touch</h4>
                    <div>
                        <i class="fa-brands fa-square-facebook fa-2x"></i>
                        <i class="fa-brands fa-square-twitter fa-2x"></i>
                        <i class="fa-brands fa-youtube fa-2x"></i>
                        <i class="fa-brands fa-square-instagram fa-2x"></i>
                    </div>
                </div>


                <div>
                    <div>
                        <h4><b>100% ORIGINAL</b> guarantee for all products at myntra.com</h4>
                    </div>
                    <div>
                        <h4><b>Return within 30 days</b> of receiving your order</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home