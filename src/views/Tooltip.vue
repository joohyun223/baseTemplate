<template>
  <div class="conArea">
    <div class="comTit">
      <h1>Tooltip</h1>
      <p> <code>bootstrap</code>과 <code>popper.js</code> 플러그인에 기반한 툴팁 컴포넌트입니다. </p>
    </div>

    <section class="preview">
      <div class="sectionTit">
        <h2>Preview</h2>
        <p><code>TTooltip</code>컴포넌트의 <code>btnText</code>속성에 데이터를 입력하면 버튼 텍스트가 입력됩니다. </p>
        <p><code>btnDataPlacement</code>속성과 <code>propsPlacementData</code>속성의 값은 툴팁의 위치설정을 위한 속성입니다.</p>
        <p><code>arrowPlacementClass</code>속성은 툴팁의 화살표의 방향을 설정합니다. <code>bs-tooltip-top</code>, <code>bs-tooltip-bottom</code>, <code>bs-tooltip-left</code>, <code>bs-tooltip-right</code> 중 알맞은 방향을 선택하여 기입하면 됩니다.</p>
        <p>버튼 태그의 접근성을 위해 <code>btnTitle</code>속성에 알맞은 버튼 제목을 입력해야합니다.</p>
        <p><code>tooltipText</code>속성은 툴팁의 내용을 표시합니다.</p>
      </div>
      <div class="example">
        <TTooltip
          @clickEvt="logText"
          @mouseEnterEvt="logText"
          @mouseLeaveEvt="logText"
          @focusEvt="logText"
          @blurEvt="logText"
          btnText="basic tooltip"
          btnDataPlacement="top"
          propsPlacementData="top"
          arrowPlacementClass="bs-tooltip-top"
          btnTitle="Title Area"
          tooltipText="툴팁내용"
          propsPlacementTopValue = 10
          propsPlacementLeftValue = 10
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;basic tooltip&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;top&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Title Area&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>
    </section>

    <section>
      <div class="sectionTit">
        <h2>Placement-top</h2>
        <p><code>btnDataPlacement</code>속성과 <code>propsPlacementData</code>속성에 <code>top-start</code>, <code>top</code>, <code>top-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on top-start"
          btnDataPlacement="top-start"
          propsPlacementData="top-start"
          arrowPlacementClass="bs-tooltip-top"
          btnTitle="Tooltip on top-start"
          tooltipText="툴팁내용"
          placementTopValue = 10
          placementLeftValue = 10
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on top"
          btnDataPlacement="top"
          propsPlacementData="top"
          arrowPlacementClass="bs-tooltip-top"
          btnTitle="Tooltip on top"
          tooltipText="툴팁내용"
          placementTopValue = 10
          placementLeftValue = 10
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on top-end"
          btnDataPlacement="top-end"
          propsPlacementData="top-end"
          arrowPlacementClass="bs-tooltip-top"
          btnTitle="Tooltip on top-end"
          tooltipText="툴팁내용"
          placementTopValue = 10
          placementLeftValue = 10
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on top-start&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;top-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top-start&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on top-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on top&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;top&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on top&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on top-end&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;top-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top-end&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on top-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>
    </section>


    <section>
      <div class="sectionTit">
        <h2>Placement-right</h2>
        <p><code>btnDataPlacement</code>속성과 <code>propsPlacementData</code>속성에 <code>right-start</code>, <code>right</code>, <code>right-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on right-start"
          btnDataPlacement="right-start"
          propsPlacementData="right-start"
          arrowPlacementClass="bs-tooltip-right"
          btnTitle="Tooltip on right-start"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on right"
          btnDataPlacement="right"
          propsPlacementData="right"
          arrowPlacementClass="bs-tooltip-right"
          btnTitle="Tooltip on right"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on right-end"
          btnDataPlacement="right-end"
          propsPlacementData="right-end"
          arrowPlacementClass="bs-tooltip-right"
          btnTitle="Tooltip on right-end"
          tooltipText="툴팁내용"
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on right-start&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;right-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;right-start&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-right&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on right-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on right&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;right&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;right&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-right&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on right&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on right-end&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;right-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;right-end&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-right&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on right-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>

    </section>


    <section>
      <div class="sectionTit">
        <h2>Placement-bottom</h2>
        <p><code>btnDataPlacement</code>속성과 <code>propsPlacementData</code>속성에 <code>bottom-start</code>, <code>bottom</code>, <code>bottom-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on bottom-start"
          btnDataPlacement="bottom-start"
          propsPlacementData="bottom-start"
          arrowPlacementClass="bs-tooltip-bottom"
          btnTitle="Tooltip on bottom-start"
          tooltipText="툴팁내용ㅇㅇㅇ"
          propsPlacementTopValue = 10
          propsPlacementLeftValue = 10
          propsPaddingValue= 50
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on bottom"
          btnDataPlacement="bottom"
          propsPlacementData="bottom"
          arrowPlacementClass="bs-tooltip-bottom"
          btnTitle="Tooltip on bottom"
          tooltipText="툴팁내용"
          propsPlacementTopValue = 10
          propsPlacementLeftValue = 10
          propsPaddingValue= 50
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on bottom-end"
          btnDataPlacement="bottom-end"
          propsPlacementData="bottom-end"
          arrowPlacementClass="bs-tooltip-bottom"
          btnTitle="Tooltip on bottom-end"
          tooltipText="툴팁내용"
          propsPlacementTopValue = 10
          propsPlacementLeftValue = 10
          propsPaddingValue= 50
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on bottom-start&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;bottom-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;bottom-start&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-bottom&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on bottom-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on bottom&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;bottom&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;bottom&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-bottom&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on bottom&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on bottom-end&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;bottom-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;bottom-end&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-bottom&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on bottom-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>

    </section>


    <section>
      <div class="sectionTit">
        <h2>Placement-left</h2>
        <p><code>btnDataPlacement</code>속성과 <code>propsPlacementData</code>속성에 <code>left-start</code>, <code>left</code>, <code>left-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on left-start"
          btnDataPlacement="left-start"
          propsPlacementData="left-start"
          arrowPlacementClass="bs-tooltip-left"
          btnTitle="Tooltip on left-start"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on left"
          btnDataPlacement="left"
          propsPlacementData="left"
          arrowPlacementClass="bs-tooltip-left"
          btnTitle="Tooltip on left"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on left-end"
          btnDataPlacement="left-end"
          propsPlacementData="left-end"
          arrowPlacementClass="bs-tooltip-left"
          btnTitle="Tooltip on left-end"
          tooltipText="툴팁내용"
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on left-start&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;left-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;left-start&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-left&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on left-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on left&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;left&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;left&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-left&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on left&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on left-end&quot;</p>
          <p>&nbsp; btnDataPlacement=&quot;left-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;left-end&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-left&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on left-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>

    </section>


    <section>
      <div class="sectionTit">
        <h3>Tooltip with HTML</h3>
        <p><code>tooltipText</code> 속성 안에 <code>html</code> 태그를 포함시켜도 태그를 인식합니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip with HTML"
          btnDataPlacement="top"
          propsPlacementData="top"
          arrowPlacementClass="bs-tooltip-top"
          btnTitle="Tooltip with HTML"
          tooltipText="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltip </p>
          <p>&nbsp; btnText=&quot;Tooltip with HTML&quot; </p>
          <p>&nbsp; btnDataPlacement=&quot;top&quot; </p>
          <p>&nbsp; propsPlacementData=&quot;top&quot; </p>
          <p>&nbsp; arrowPlacementClass=&quot;bs-tooltip-top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip with HTML&quot; </p>
          <p>&nbsp; tooltipText=&quot;&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>
    </section>
  </div>
</template>

<script>
import TTooltip from '../components/tooltip/TTooltip.vue';

export default {
  components: {
    TTooltip
  },
  data: () => {
    return {

    };
  },
  methods: {
    logText: function(evt) {
      // console.log('-----logText test');
      // console.log(evt.target.nextSibling);

      if (evt.target.nextSibling.classList.contains('show')) {
        console.log('showTooltip');
      } else {
        console.log('hideTooltip');
      }
    }
  }
};
</script>

<style>
</style>