import './horse-shop.css';

function HorseShop() {
  
  return (
    <div>
      <header class="header">
        <h1>Welcome</h1>
        <p>This will be where horses can be bought</p>
          <div class="cart"><p>Cart (0)</p></div>
      </header>
      <div class="outer-box">
      <div class="box">
        <h2>Horse Name</h2>
        <p>Horse info</p>
        <button>Buy</button>
      </div>
      <div class="box">
        <h2>Horse Name</h2>
        <p>Horse info</p>
        <button>Buy</button>
      </div>
      <div class="box">
        <h2>Horse Name</h2>
        <p>Horse info</p>
        <button>Buy</button>
      </div>
      </div>
    </div>
  );
}

export default HorseShop;