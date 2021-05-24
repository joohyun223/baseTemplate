<template>
  <div class="conArea">
          <div class="comTit">
              <h1>Buttons</h1>
              <p> Bootstrap의 사용자 정의 버튼 스타일을 사용한 버튼. 다양한 사이즈와 상태등을 지원합니다. </p>
          </div>

          <section class="preview">
              <div class="sectionTit">
                  <h3>Preview</h3>
                  <p>여러 버튼 스타일을 지원합니다.</p>
              </div>
              <div class="example">
                <TButton type="button" class="btn btn-primary mr-1" @click="clickEvt">Primary</TButton>
                <TButton type="button" class="btn btn-secondary mr-1" @click="clickEvt">Secondary</TButton>
                <TButton type="button" class="btn btn-success mr-1">Success</TButton>
                <TButton type="button" class="btn btn-danger mr-1">Danger</TButton>
                <TButton type="button" class="btn btn-warning mr-1">Warning</TButton>
                <TButton type="button" class="btn btn-info mr-1">Info</TButton>
                <TButton type="button" class="btn btn-light mr-1">Light</TButton>
                <TButton type="button" class="btn btn-dark mr-1">Dark</TButton>
                <TButton type="button" class="btn btn-link mr-1">Link</TButton>
              </div>
              <div class="codeArea">
                <pre>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-primary mr-1&quot; @click=&quot;clickEvt&quot;&gt;Primary&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-secondary mr-1&quot; @click=&quot;clickEvt&quot; &gt;Secondary&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-success mr-1&quot;&gt;Success&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-danger mr-1&quot;&gt;Danger&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-warning mr-1&quot;&gt;Warning&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-info mr-1&quot;&gt;Info&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-light mr-1&quot;&gt;Light&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-dark mr-1&quot;&gt;Dark&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-link mr-1&quot;&gt;Link&lt;/TButton&gt;</p>
                </pre>
              </div>
          </section>

          <section>
              <div class="sectionTit">
                  <h3>Sizing</h3>
                  <p>.btn-lg또는 .btn-sm 클래스를 추가하여 사이즈 조절이 가능합니다.</p>
              </div>
              <div class="example">
                <TButton type="button" class="btn btn-primary btn-sm mr-1">small</TButton>
                <TButton type="button" class="btn btn-secondary mr-1">middle</TButton>
                <TButton type="button" class="btn btn-success btn-lg mr-1">large</TButton>
              </div>
              <div class="codeArea">
                <pre>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot;&gt;small&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;middle&lt;/TButton&gt;</p>
                  <p>&lt;TButton type=&quot;button&quot; class=&quot;btn btn-success btn-lg&quot;&gt;large&lt;/TButton&gt;</p>
                </pre>
              </div>
          </section>
          
          <section class="preview">
            <div class="sectionTit">
              <h2> &lt;TButton &gt; </h2>
              <p> button 컴포넌트 입니다.</p>
            </div>
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
                            <td>class</td>
                            <td>String</td>
                            <td></td>
                            <td>button의 클래스 지정</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>String</td>
                            <td>'button'</td>
                            <td>button의 타입 속성 지정</td>
                        </tr>
                    </tbody>
                </table>
            </section>
          </section>

          <section class="preview">
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
                        <th>Method</th>
                        <th>Arguments</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>@click</td>
                        <td>event</td>
                        <td>버튼 클릭 시 지정한 이벤트가 트리거 됩니다.</td>
                    </tr>
                </tbody>
            </table>
          </section>
  </div>
</template>

<script>
import TButton from '@/components/button/TButton.vue';
export default {
  components: {
    TButton
  },
  data: ()=> {
    return {
    };
  },
  methods: {
    clickEvt: function(evt) {
      console.log('clicked' , evt.target);
    }
  }
};
</script>

<style>

</style>