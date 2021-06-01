<template>
  <div class="conArea">
    <div class="comTit">
        <h1>Datepicker</h1>
        <p>달력 및 날짜 선택이 가능한 컴포넌트입니다. </p>
        <p><a href="https://github.com/ManukMinasyan/vue-functional-calendar?ref=madewithvuejs.com"> 오픈소스 </a> 참조</p>
    </div>
    <section class="preview">
        <div class="sectionTit">
            <h2>Default Dropdown</h2>
        </div>
        <div class="example">
          <functional-calendar @changedYear="changeYearEvt" @changedMonth="changeMonthEvt" @dayClicked="dayClickEvt" :isDatePicker='true' :changeMonthFunction='true'/>

        </div>
        <div class="codeArea">
          <pre>
            <p>&lt;functional-calendar @changedYear=&quot;changeYearEvt&quot; @changedMonth=&quot;changeMonthEvt&quot; @dayClicked=&quot;dayClickEvt&quot; :isDatePicker=&apos;true&apos; :changeMonthFunction=&apos;true&apos;/&gt;</p>
          </pre>
        </div>

        <div class="contents">
          <div class="sectionTit">
              <h3>Date Range </h3>
              <p>isDateRange='true' 속성을 추가합니다.</p>
          </div>
          <div class="example">
            <functional-calendar @selectedDaysCount="daysCountEvt" :isDateRange='true'/>
          </div>
          <div class="codeArea">
            <pre>
              <p> &lt;functional-calendar @selectedDaysCount=&quot;daysCountEvt&quot; :isDateRange=&apos;true&apos;/&gt;&nbsp;</p>
            </pre>
          </div>
        </div>

        <div class="contents">
          <div class="sectionTit">
              <h3> Modal Date Range </h3>
              <p>isModal='true', isDateRange='true' 속성을 추가합니다.</p>
          </div>
          <div class="example">
            <functional-calendar @opened="pickerOpenedEvt" @closed="pickerClosedEvt" :isModal='true' :isDateRange='true' dateFormat="yyyy/mm/dd"></functional-calendar>
          </div>
          <div class="codeArea">
            <pre>
              <p>&lt;functional-calendar @opened=&quot;pickerOpenedEvt&quot; @closed=&quot;pickerClosedEvt&quot; :isModal=&apos;true&apos; :isDateRange=&apos;true&apos; dateFormat=&quot;yyyy/mm/dd&quot;&gt;&lt;/functional-calendar&gt;</p>
            </pre>
          </div>
        </div>
    </section>

    <section class="preview">
          <div class="contents">
              <div class="sectionTit">
                <h2> &lt;TDropdown&gt; </h2>
                <p>dropdown 컴포넌트 입니다. 필요에 따라 속성을 추가하여 드롭다운의 스타일/이벤트 등을 정의합니다.</p>
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
                              <td>changeMonthFunction</td>
                              <td>Boolean</td>
                              <td></td>
                              <td>달 선택 창 show/hide 여부</td>
                          </tr>
                          <tr>
                              <td>isDatePicker</td>
                              <td>Boolean</td>
                              <td></td>
                              <td>날짜 지정 여부</td>
                          </tr>
                          <tr>
                              <td>isDateRange</td>
                              <td>Boolean</td>
                              <td></td>
                              <td>날짜 범위 지정 여부</td>
                          </tr>
                          <tr>
                              <td>isModal</td>
                              <td>Boolean</td>
                              <td></td>
                              <td>버튼 선택 시 모달 팝업 여부</td>
                          </tr>
                          <tr>
                              <td>dateFormat</td>
                              <td>String</td>
                              <td>'dd/mm/yyyy'</td>
                              <td>데이터포맷 설정</td>
                          </tr>
                      </tbody>
                  </table>
              </section>

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
                          <td>@opend</td>
                          <td>Function</td>
                          <td>모달 데이트피커가 open시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                      <tr>
                          <td>@closed</td>
                          <td>Function</td>
                          <td>모달 데이트피커가 closed시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                      <tr>
                          <td>@changedYear</td>
                          <td>Function</td>
                          <td>년도 페이지가 바뀌는 경우 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                      <tr>
                          <td>@changedMonth</td>
                          <td>Function</td>
                          <td>달이 바뀌는 경우 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                      <tr>
                          <td>@dayClicked</td>
                          <td>Function</td>
                          <td>날짜 선택 시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                      <tr>
                          <td>@daysCountEvt</td>
                          <td>Function</td>
                          <td>날짜범위 선택 시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </section>
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
export default {
  components: {
    FunctionalCalendar
  },
  data() {
    return {
      calendar   : {},
      markedDates: ['6-3-2021']
    };
  },
  mounted: function() {
    const agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf('msie') != -1)) { 

      Array.prototype.forEach.call(document.querySelectorAll('.vfc-calendars-container') , function(itm) {
        itm.style.display = 'block';
      });
    }
  },
  methods: {
    dayClickEvt: function(evt) {
      console.log('day clicked', evt);
    },
    changeMonthEvt: function(evt) {
      console.log('month changed', evt);
    },
    changeYearEvt: function(evt) {
      console.log('year changed', evt);
    },
    pickerOpenedEvt: function(evt) {
      console.log('picker opened', evt);
    },
    pickerClosedEvt: function(evt) {
      console.log('picker closed', evt);
    },
    daysCountEvt: function(evt) {
      console.log('day count', evt);
    }
  }
};
</script>

<style scoped>
.example{
  width: 330px;
}
.vfc-hide{
  cursor: not-allowed;
}
</style>

<style>
.vfc-popover-container{
  position: relative;
}

.vfc-main-container{
  width: 100% !important;
}
</style>