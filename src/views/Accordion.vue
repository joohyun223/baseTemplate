<template>
  <div class="conArea">
          <div class="comTit">
              <h1>Accordion</h1>
          </div>

          <section class="preview">
              <div class="sectionTit">
                  <h2>Default</h2>
                  <p>기본 아코디언 기능</p>
              </div>
              <div class="example">
                <TAccordion :contents='contents'/>
              </div>
              <div class="codeArea">
                  <pre>
                    <p>&lt;TAccordion </p>
                      <p>&nbsp; &nbsp;:contents=&quot;[{ tit: &apos;아코디언 테스트 1번 타이틀 영역입니다.&apos;, con: &apos;아코디언 테스트 1번 컨텐츠 영역입니다.&apos; },</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  { tit: &apos;아코디언 테스트 2번 타이틀 영역입니다.&apos;, con: &apos;아코디언 테스트 2번 컨텐츠 영역입니다.&apos; },</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  { tit: &apos;아코디언 테스트 3번 타이틀 영역입니다.&apos;, con: &apos;아코디언 테스트 3번 컨텐츠 영역입니다.&apos; },]&quot;</p>
                      <!-- <p>&nbsp; &nbsp; @click=&quot;click(e) {</p>
                      <p>&nbsp; &nbsp; &nbsp; if (e.target.parentNode.parentNode.classList.contains('on')) {</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; console.log('open'); {</p>
                      <p>&nbsp; &nbsp; &nbsp; } else {</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; console.log('close'); {</p>
                      <p>&nbsp; &nbsp; &nbsp; }</p>
                      <p>&nbsp; &nbsp; }</p> -->
                    <p>&lt;/TAccordion&gt; </p>
                  </pre>
              </div>
          </section>

          <section class="preview">
              <div class="sectionTit">
                  <h2>Individual</h2>
                  <p>하나의 컨텐츠만 활성화</p>
              </div>
              <div class="example">
                <TAccordion :contents='contents' :type='"individual"'/>
              </div>
              <div class="codeArea">
                  <pre>
                    <p>&lt;TAccordion </p>
                      <p>&nbsp; &nbsp;:contents=&quot;[{ tit: &apos;아코디언 테스트 1번 타이틀 영역입니다.&apos;, con: &apos;아코디언 테스트 1번 컨텐츠 영역입니다.&apos; },</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  { tit: &apos;아코디언 테스트 2번 타이틀 영역입니다.&apos;, con: &apos;아코디언 테스트 2번 컨텐츠 영역입니다.&apos; },</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  { tit: &apos;아코디언 테스트 3번 타이틀 영역입니다.&apos;, con: &apos;아코디언 테스트 3번 컨텐츠 영역입니다.&apos; },]&quot;</p>
                      <p>&nbsp; &nbsp;:type=&quot;individual&quot;</p>
                      <!-- <p>&nbsp; &nbsp; @click=&quot;click(e) {</p>
                      <p>&nbsp; &nbsp; &nbsp; if (e.target.parentNode.parentNode.classList.contains('on')) {</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; console.log('open'); {</p>
                      <p>&nbsp; &nbsp; &nbsp; } else {</p>
                      <p>&nbsp; &nbsp; &nbsp; &nbsp; console.log('close'); {</p>
                      <p>&nbsp; &nbsp; &nbsp; }</p>
                      <p>&nbsp; &nbsp; }</p> -->
                    <p>&lt;/TAccordion&gt; </p>
                  </pre>
              </div>
          </section>

          <div class="reference">
              <section>
                  <div class="sectionTit">
                      <h3>Properties</h3>
                      <!-- <p>All property default values are globally configurable.</p> -->
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
                              <td>contents</td>
                              <td>Object</td>
                              <td>undefined</td>
                              <td>아코디언의 제목 및 컨텐츠 : {tit,con}</td>
                          </tr>
                          <tr>
                              <td>type</td>
                              <td>String</td>
                              <td>undefined</td>
                              <td>아코디언의 타입 : 'undefined', 'individual'</td>
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
                              <td>open</td>
                              <td>타이틀 엘리먼트</td>
                              <td>아코디언 열기</td>
                          </tr>
                          <tr>
                              <td>close</td>
                              <td>타이틀 엘리먼트</td>
                              <td>아코디언 닫기</td>
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
                              <td>click</td>
                              <td>아코디언 클릭 시 호출</td>
                          </tr>
                      </tbody>
                  </table>
              </section>
          </div>
  </div>
</template>

<script>
import TAccordion from '@/components/accordion/TAccordion.vue';
export default {
  components: {
    TAccordion
  },
  data() {
    return {
      contents: [{
        tit: '아코디언 테스트 1번 타이틀 영역입니다.',
        con: '아코디언 테스트 1번 컨텐츠 영역입니다.'
      }, {
        tit: '아코디언 테스트 2번 타이틀 영역입니다.',
        con: '아코디언 테스트 2번 컨텐츠 영역입니다.'
      }, {
        tit: '아코디언 테스트 3번 타이틀 영역입니다.',
        con: '아코디언 테스트 3번 컨텐츠 영역입니다.'
      }]
      // click(e) {
      //   if (e.target.parentNode.parentNode.classList.contains('on')) {
      //     console.log('open');
      //   } else {
      //     console.log('close');
      //   }
      // }
    };
  }
};
</script>
<style scope>
</style>