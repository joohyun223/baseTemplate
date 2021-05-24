<template>
  <div class="conArea">
          <div class="comTit">
              <h1>Pagination</h1>
          </div>

          <section class="preview">
              <div class="sectionTit">
                  <h2></h2>
              </div>
              <div class="example">
                  <TPagination :total-data='totalData' :count-per-view='countPerView' :on-change="onChange" :page-change="pageChange"/>
              </div>
              <div class="codeArea">
                  <pre>
                    <p>&lt;TPagination </p>
                    <p>&nbsp; &nbsp;:total-data=&quot;35&quot; </p>
                    <p>&nbsp; &nbsp;:count-per-view=&quot;5&quot; </p>
                    <p>&nbsp; &nbsp;:onChange=&quot;onChange(thisVal) {console.log('onChange', '현재 페이지: '+thisVal);}&quot; </p>
                    <p>&nbsp; &nbsp;:pageChange=&quot;pageChange() {console.log('pageChange');}&quot; </p>
                    <p>&lt;/TPagination&gt; </p>
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
                              <td>totalData</td>
                              <td>Number</td>
                              <td>1</td>
                              <td>총 페이징 개수</td>
                          </tr>
                          <tr>
                              <td>count-per-view</td>
                              <td>Number</td>
                              <td>1</td>
                              <td>한번에 보일 페이징 갯수</td>
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
                              <td>onChange</td>
                              <td>active 클래스 변동 시 호출 첫번 째 인자 값으로 현제 활성화 된 페이징 리턴</td>
                          </tr>
                          <tr>
                              <td>pageChange</td>
                              <td>다음/이전 페이징 목록 변동 시 호출</td>
                          </tr>
                      </tbody>
                  </table>
              </section>
          </div>
  </div>
</template>

<script>
import TPagination from '@/components/pagination/TPagination.vue';
export default {
  components: {
    TPagination
  },
  data() {
    return {
      totalData   : 35,
      countPerView: 8,
      onChange(thisVal) {
        console.log('onChange', '현재 페이지: '+thisVal);
      },
      pageChange() {
        console.log('pageChange');
      },
    };
  },
  mounted() {
  }
};


</script>