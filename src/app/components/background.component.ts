import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  template: `
    <section data-v-413fea4d="" id="fantasy-land" style="--blur: blur(170px); --opacity: 0.44; ">
      <section data-v-413fea4d="" class="g-polygon-1"></section>
      <section data-v-413fea4d="" class="g-polygon-2"></section>
      <section data-v-413fea4d="" class="g-polygon-3"></section>
    </section>
  `,
  styles: `
  #fantasy-land {
            will-change: auto;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
            overflow: hidden;
            filter: var(--blur);
        }

        .g-polygon-1 {
            bottom: 100px;
            left: 25%;
            transform: translate(-50%);
            width: 45vw;
            height: 55vh;
            background: linear-gradient(#fe5, #fdee99);
            clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
            animation: scale-in-middle-413fea4d 2.5s linear;
        }

        .g-polygon-2 {
            bottom: 0;
            left: 2%;
            transform: translate(-50%);
            width: 65vw;
            height: 50vh;
            animation: scale-in-bottom-413fea4d 2.5s linear;
            background: linear-gradient(-36deg, #e950d1, #f980d9, #f5f, #ff2c55, #ff5e55);
            clip-path: polygon(10% 0, 100% 70%, 100% 100%, 5% 90%);
        }

        .g-polygon-3 {
            bottom: 0;
            left: 28%;
            transform: translate(-50%);
            width: 65vw;
            height: 50vh;
            background: #5750e9;
            animation: scale-in-bottom-413fea4d 2.5s linear;
            clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
        }

        #fantasy-land>section {
            position: absolute;
            opacity: var(--opacity);
            transition: all ease-out .5s;
            transform: scale(1);
        }`
})
export class BackgroundComponent {

}
