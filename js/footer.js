const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
               <li class="category-title">men</li> 
               <li><a href="#" class="footer-link">t-shirts</a></li>
               <li><a href="#" class="footer-link">sweatshirts</a></li>
               <li><a href="#" class="footer-link">shirts</a></li>
               <li><a href="#" class="footer-link">jeans</a></li>
               <li><a href="#" class="footer-link">trousers</a></li>
               <li><a href="#" class="footer-link">shoes</a></li>
               <li><a href="#" class="footer-link">casuals</a></li>
               <li><a href="#" class="footer-link">formals</a></li>
               <li><a href="#" class="footer-link">sports</a></li>
               <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li> 
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
             </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum, voluptates, dicta laudantium explicabo obcaecati at magnam reiciendis cum nam eum veritatis iure ipsam et voluptatem neque. Corrupti eos nobis quis sapiente ipsa odit earum velit atque. Tempore tempora labore omnis officia corrupti quibusdam repellendus porro quaerat repellat. Tempore sapiente nostrum, ut placeat vitae odit repellat sit, eius maiores, harum omnis ducimus temporibus iste corporis quasi beatae animi possimus a quam! Optio voluptate voluptatibus aliquid eum reprehenderit inventore architecto, quia repellat cumque nobis aliquam nam odit hic. Quaerat, saepe? Saepe cumque magni quam voluptates autem, nulla fugiat mollitia molestias doloribus.</p>
    <p class="info">support emails - help@Clothing.com, customersupport@Clothing.com</p>
    <p class="info">telephone - +251 933 364 303, +251 912 981 456 </p>
     <div class="footer-social-container">
         <div>
             <a href="#" class="social-link">terms & services</a>
             <a href="#" class="social-link">privacy page</a>
         </div>
         <div>
             <a href="#" class="social-link">instagram</a>
             <a href="#" class="social-link">facebook</a>
             <a href="#" class="social-link">twitter</a>
         </div>
     </div>
     <p class="footer-credit">Clothing, Best apparels online Store</p>
    `;
}

createFooter();