<template>
  <div class="conArea">
          <div class="comTit">
              <h1>Swiper</h1>
          </div>

          <section class="preview">
              <div class="sectionTit">
                  <h2>기본 스와이프</h2>
              </div>
              <div class="example">
                  <TSwiper :init='init' :speed='speed' :navigation='navigation' :pagination='pagination' :slides-per-view='slidesPerView' @click="btnClick"/>
              </div>
              <div class="codeArea">
                  <pre>
                    <p>&lt;TSwiper </p>
                    <p>&nbsp; &nbsp;:init=&quot;[{ src: &apos;img_plusfriend_step01.gif&apos; }, { src: &apos;img_plusfriend_step02.gif&apos; }, { src: &apos;img_plusfriend_step03.gif&apos; }]&quot; </p>
                    <p>&nbsp; &nbsp;:speed=&quot;500&quot; </p>
                    <p>&nbsp; &nbsp;:navigation=&quot;{ nextEl: &apos;.swiper-button-next&apos;, prevEl: &apos;.swiper-button-prev&apos; }&quot; </p>
                    <p>&nbsp; &nbsp;:pagination=&quot;{ el : &apos;.swiper-pagination&apos;, type : &apos;bullets&apos;, clickable: true }&quot; </p>
                    <!-- <p>&nbsp; &nbsp;:wrap-width=&quot;1120px&quot; </p> -->
                    <p>&nbsp; &nbsp;:slides-per-view=&quot;2&quot; </p>
                    <p>&nbsp; &nbsp;@click=&quot;btnClick(e) { </p>
                    <p>&nbsp; &nbsp; &nbsp;if (e.target.classList.contains('swiper-button-next')) { </p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp;console.log('next'); </p>
                    <p>&nbsp; &nbsp; &nbsp;} else { </p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp;console.log('prev'); </p>
                    <p>&nbsp; &nbsp; &nbsp;} </p>
                    <p>&nbsp; &nbsp;}&quot; </p>
                    <p>&lt;/TSwiper&gt; </p>
                </pre>
              </div>
          </section>

          <section class="preview">
              <div class="sectionTit">
                  <h2>루프 스와이프</h2>
              </div>
              <div class="example">
                  <TSwiper :init='init' :speed='speed' :loop='loop' @trans-start='transStart' @trans-end='transEnd'/>
              </div>
              <div class="codeArea">
                <pre>
                    <p>&lt;TSwiper </p>
                    <p>&nbsp; &nbsp;:init=&quot;[{ src: &apos;img_plusfriend_step01.gif&apos; }, { src: &apos;img_plusfriend_step02.gif&apos; }, { src: &apos;img_plusfriend_step03.gif&apos; }]&quot; </p>
                    <p>&nbsp; &nbsp;:speed=&quot;500&quot; </p>
                    <p>&nbsp; &nbsp;:navigation=&quot;{ nextEl: &apos;.swiper-button-next&apos;, prevEl: &apos;.swiper-button-prev&apos; }&quot; </p>
                    <p>&nbsp; &nbsp;:loop=&quot;true&quot; </p>
                    <p>&nbsp; &nbsp;@trans-start=&quot;transStart() {console.log('transStart');}&quot; </p>
                    <p>&nbsp; &nbsp;@trans-end=&quot;transEnd() {console.log('transEnd');}&quot; </p>
                    <p>&lt;/TSwiper&gt; </p>
                </pre>
              </div>
          </section>

          <section class="preview">
              <div class="sectionTit">
                  <h2>오토플레이 스와이프</h2>
              </div>
              <div class="example">
                  <TSwiper :init='init' :speed='speed' :navigation='navigation' :pagination='pagination' :loop='loop' :autoplay='autoplay' @click="btnClick"/>
              </div>
              <div class="codeArea">
                  <pre>
                    <p>&lt;TSwiper </p>
                    <p>&nbsp; &nbsp;:init=&quot;[{ src: &apos;img_plusfriend_step01.gif&apos; }, { src: &apos;img_plusfriend_step02.gif&apos; }, { src: &apos;img_plusfriend_step03.gif&apos; }]&quot; </p>
                    <p>&nbsp; &nbsp;:speed=&quot;500&quot; </p>
                    <p>&nbsp; &nbsp;:navigation=&quot;{ nextEl: &apos;.swiper-button-next&apos;, prevEl: &apos;.swiper-button-prev&apos; }&quot; </p>
                    <p>&nbsp; &nbsp;:pagination=&quot;{ el : &apos;.swiper-pagination&apos;, type : &apos;bullets&apos;, clickable: true }&quot; </p>
                    <p>&nbsp; &nbsp;:loop=&quot;true&quot; </p>
                    <p>&nbsp; &nbsp;:autoplay=&quot;{ delay : 2000, disableOnInteraction: false }&quot; </p>
                    <p>&lt;/TSwiper&gt; </p>
                </pre>
              </div>
          </section>


          <div class="reference">
              <section>
                  <div class="sectionTit">
                      <h3>Properties</h3>
                  </div>
                  <table>
                      <colgroup>
                          <col width="20%"/>
                          <col width="15%"/>
                          <col width="15%"/>
                          <col width="50%"/>
                      </colgroup>
                      <thead>
                          <tr>
                              <th>Property</th>
                              <th>Type</th>
                              <th>Default</th>
                              <th>Description</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>init</td>
                              <td>Object</td>
                              <td>{}</td>
                              <td>컨텐츠에 사용 할 이미지 경로와 스타일 값: {src: 'src', style: Object}</td>
                          </tr>
                          <tr>
                              <td>speed</td>
                              <td>Number</td>
                              <td>{}</td>
                              <td>스와이프 속도</td>
                          </tr>
                          <tr>
                              <td>width</td>
                              <td>Number</td>
                              <td>null</td>
                              <td>swiper-slide 크기 지정</td>
                          </tr>
                          <tr>
                              <td>wrap-width</td>
                              <td>Number</td>
                              <td>'auto'</td>
                              <td>swiper-container 크기 지정</td>
                          </tr>
                          <tr>
                              <td>navigation</td>
                              <td>Object</td>
                              <td>{}</td>
                              <td>왼쪽, 오른쪽 버튼의 셀렉터: {nextEl: Selector, prevEl: Selector}</td>
                          </tr>
                          <tr>
                              <td>pagination</td>
                              <td>Object</td>
                              <td>{}</td>
                              <td>인디게이터의 셀렉터, 타입, 클릭 기능 유무 {el: Selector, type: 'bullets' | 'fraction' | 'progressbar' | 'custom', clickable: Boolean}</td>
                          </tr>
                          <tr>
                              <td>loop</td>
                              <td>String</td>
                              <td>false</td>
                              <td>스와이프 루프 유무: true | false</td>
                          </tr>
                          <tr>
                              <td>autoplay</td>
                              <td>Object</td>
                              <td>{}</td>
                              <td>오토플레이 유무: {delay: Number, disableOnInteraction: Boolean}</td>
                          </tr>
                            <tr>
                              <td>slides-per-view</td>
                              <td>Number</td>
                              <td>1</td>
                              <td>한번에 보여질 스와이프 개수</td>
                          </tr>
                      </tbody>
                  </table>
              </section>
              <section>
                  <div class="sectionTit">
                      <h3>Methods</h3>
                  </div>
                  <table>
                      <colgroup>
                          <col width="20%"/>
                          <col width="40%"/>
                          <col width="40%"/>
                      </colgroup>
                      <thead>
                          <tr>
                              <th>Methods</th>
                              <th>Arguments</th>
                              <th>Description</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>slideTo</td>
                              <td>index, speed, runCallbacks</td>
                              <td>스와이프 순번 이동</td>
                          </tr>
                          <tr>
                              <td>slideToLoop</td>
                              <td>index, speed, runCallbacks</td>
                              <td>루프 스와이프 순번 이동</td>
                          </tr>
                          <tr>
                              <td>update</td>
                              <td></td>
                              <td>스와이프 업데이트</td>
                          </tr>
                      </tbody>
                  </table>
              </section>
              <section>
                  <div class="sectionTit">
                      <h3>Events</h3>
                  </div>
                  <table>
                      <colgroup>
                          <col width="40%"/>
                          <col width="60%"/>
                      </colgroup>
                      <thead>
                          <tr>
                              <th>Event</th>
                              <th>Description</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>btnClick</td>
                              <td>클릭 시 호출</td>
                          </tr>
                          <tr>
                              <td>trans-start</td>
                              <td>스와이프 전환 중 애니메이션이 시작 될 때 호출</td>
                          </tr>
                          <tr>
                              <td>trans-end</td>
                              <td>스와이프 전환 중 애니메이션이 끝날 때 호출</td>
                          </tr>
                      </tbody>
                  </table>
              </section>
          </div>
  </div>
</template>

<script>
import TSwiper from '@/components/swipe/TSwipe.vue';
export default {
  components: {
    TSwiper
  },
  data() {
    return {
      init: [{
        src: 'img_plusfriend_step01.gif'
      }, {
        src: 'img_plusfriend_step02.gif'
      }, {
        src: 'img_plusfriend_step03.gif'
      }],
      speed     : 500,
      width     : 500,
      wrapWidth : '1120px',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el       : '.swiper-pagination',
        type     : 'bullets',
        clickable: true
      },
      loop    : true,
      autoplay: {
        delay               : 2000,
        disableOnInteraction: false
      },
      slidesPerView: 2,
      btnClick(e) {
        var target = e.target;
        if (target.classList.contains('swiper-button-next')) {
          console.log('next');
        } else {
          console.log('prev');
        }
        // const swiper = this.swiper;
        // if (swiper.animating) {
        //   return false;
        // }
      },
      transStart() {
        console.log('transStart');
      },
      transEnd() {
        console.log('transEnd');
      }
    };
  },
  mounted() {
  }
};

</script>

<style scope>

</style>