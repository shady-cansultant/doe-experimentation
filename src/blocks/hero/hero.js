import './hero.scss';

export default async function decorate(block) {
  block.innerHTML = `
  <div class="nsw-hero-banner nsw-hero-banner--dark nsw-hero-banner--wide">
  <div class="nsw-hero-banner__container">
    <div class="nsw-hero-banner__wrapper">
      <div class="nsw-hero-banner__content">
        <h1>Helping you deliver great government services</h1>
        <p class="nsw-intro">Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance</p>
        <div class="nsw-hero-banner__button"><a href="#" class="nsw-button nsw-button--white">View Digital Service Toolkit</a></div>
      </div>
      <div class="nsw-hero-banner__box">
      </div>
    </div>
  </div>
</div>`;
}
