<template>
  <div class="conArea">
    <div class="comTit">
      <h1>Tooltip</h1>
      <p> <code>bootstrap</code>과 <code>popper.js</code> 플러그인에 기반한 툴팁 컴포넌트입니다.</p>
    </div>

    <section class="preview">
      <div class="sectionTit">
        <h2>Preview</h2>
        <p>기본 툴팁입니다.</p>
        <p><code>propsPlacementData</code>속성의 값은 <code>top</code> , <code>bottom</code> , <code>left</code> , <code>right</code> 로 방향을 설정할 수 있고  <code>top-start</code>, <code>top</code>, <code>top-end</code>과 같이 시작 지점을 설정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          @clickEvt="logText"
          @mouseEnterEvt="logText"
          @mouseLeaveEvt="logText"
          @focusEvt="logText"
          @blurEvt="logText"
          btnText="basic tooltip"
          propsPlacementData="top"
          btnTitle="Title Area"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; @clickEvt=&quot;logText&quot; </p>
          <p>&nbsp; @mouseEnterEvt=&quot;logText&quot;</p>
          <p>&nbsp; @mouseLeaveEvt=&quot;logText&quot; </p>
          <p>&nbsp; @focusEvt=&quot;logText&quot; </p>
          <p>&nbsp; @blurEvt=&quot;logText&quot;</p>
          <p>&nbsp; btnText=&quot;basic tooltip&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Title Area&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>logText(evt) { </p>
          <p>&nbsp; if (evt.target.nextSibling.classList.contains(&apos;show&apos;)) { </p>
          <p>&nbsp; &nbsp; console.log(&apos;showTooltip&apos;); } else { </p>
          <p>&nbsp; &nbsp; console.log(&apos;hideTooltip&apos;); </p>
          <p>&nbsp; } </p>
          <p>}</p>
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
                  <td>btnText</td>
                  <td>String</td>
                  <td></td>
                  <td>툴팁버튼에 들어갈 내용을 설정하는 속성입니다.</td>
                </tr>
                <tr>
                  <td>propsPlacementData</td>
                  <td>String</td>
                  <td></td>
                  <td>툴팁의 위치설정을 위해 툴팁과 툴팁버튼에 값이 적용되는 속성입니다.</td>
                </tr>
                <tr>
                  <td>btnTitle</td>
                  <td>String</td>
                  <td></td>
                  <td>접근성을 위한 <code>button</code> 태그의 <code>title</code>속성을 설정합니다.</td>
                </tr>
                <tr>
                  <td>tooltipText</td>
                  <td>String</td>
                  <td></td>
                  <td>툴팁 요소의 안에 들어갈 내용을 설정합니다.</td>
                </tr>
                <tr>
                  <td>propsPlacementY</td>
                  <td>Number</td>
                  <td>0</td>
                  <td>툴팁 요소의 y축 위치값을 설정하며 값이 커질수록 아래로 이동합니다. 10 정도의 값을 권장합니다.</td>
                </tr>
                <tr>
                  <td>propsPlacementX</td>
                  <td>Number</td>
                  <td>0</td>
                  <td>툴팁 요소의 x축 위치값을 설정하며 값이 커질수록 오른쪽으로 이동합니다. 기본값 0의 값을 권장합니다.</td>
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
              <td>clickEvt</td>
              <td>툴팁버튼을 클릭 할 때 호출되며 툴팁이 보여집니다.</td>
            </tr>
            <tr>
              <td>mouseEnterEvt</td>
              <td>툴팁버튼에 마우스가 들어올 때 호출되며 툴팁이 보여집니다.</td>
            </tr>
            <tr>
              <td>mouseLeaveEvt</td>
              <td>툴팁버튼에 마우스가 들어왔다가 떠날 때 호출며 툴팁이 사라집니다.</td>
            </tr>
            <tr>
              <td>focusEvt</td>
              <td>툴팁버튼이 포커싱 될 때 호출되며 툴팁이 보여집니다.</td>
            </tr>
            <tr>
              <td>blurEvt</td>
              <td>툴팁버튼에 포커싱이 풀릴 때 호출되며 툴팁이 사라집니다.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <section>
      <div class="sectionTit">
        <h3>Tooltip with HTML</h3>
        <p><code>tooltipText</code> 속성 안에 <code>html</code> 태그를 포함시켜도 태그를 인식합니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip with HTML"
          propsPlacementData="top"
          btnTitle="Tooltip with HTML"
          tooltipText="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
          propsPlacementY="10"
          propsPlacementX="0"
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltip </p>
          <p>&nbsp; btnText=&quot;Tooltip with HTML&quot; </p>
          <p>&nbsp; propsPlacementData=&quot;top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip with HTML&quot; </p>
          <p>&nbsp; tooltipText=&quot;&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>
    </section>

    <section>
      <div class="sectionTit">
        <h2>위치 값 조정하기</h2>
        <p><code>propsPlacementY</code>속성과 <code>propsPlacementX</code>속성을 이용하여 위치 값을 조정할 수 있습니다.</p>
        <p><code>propsPlacementY</code>속성은 커질수록 아래로 위치값이 변경되며 10정도의 값이 권장됩니다.</p>
        <p><code>propsPlacementX</code>속성은 커질수록 오른쪽로 위치값이 변경되며 기본값 0의 값이 권장됩니다.</p>
      </div>
      <div class="example">
        <div>
          propsPlacementY : 10, propsPlacementX : 0
        </div>
        <TTooltip
          btnText="Tooltip on bottom"
          propsPlacementData="bottom"
          btnTitle="Tooltip on bottom"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
        <div>
          propsPlacementY : 20, propsPlacementX : 10
        </div>
        <TTooltip
          btnText="Tooltip on bottom"
          propsPlacementData="bottom"
          btnTitle="Tooltip on bottom"
          tooltipText="툴팁내용"
          propsPlacementY = 20
          propsPlacementX = 10
        ></TTooltip>
        <div>
          propsPlacementY : 10, propsPlacementX : -40
        </div>
        <TTooltip
          btnText="Tooltip on bottom"
          propsPlacementData="bottom"
          btnTitle="Tooltip on bottom"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = -40
        ></TTooltip>
      </div>

    </section>

    <section>
      <div class="sectionTit">
        <h2>Placement-top</h2>
        <p><code>propsPlacementData</code>속성에 <code>top-start</code>, <code>top</code>, <code>top-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on top-start"
          propsPlacementData="top-start"
          btnTitle="Tooltip on top-start"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on top"
          propsPlacementData="top"
          btnTitle="Tooltip on top"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on top-end"
          propsPlacementData="top-end"
          btnTitle="Tooltip on top-end"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on top-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top-start&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on top-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on top&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on top&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on top-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;top-end&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on top-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>
    </section>


    <section>
      <div class="sectionTit">
        <h2>Placement-right</h2>
        <p><code>propsPlacementData</code>속성에 <code>right-start</code>, <code>right</code>, <code>right-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on <br /> right-start"
          propsPlacementData="right-start"
          btnTitle="Tooltip on right-start"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on <br /> right"
          propsPlacementData="right"
          btnTitle="Tooltip on right"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on <br /> right-end"
          propsPlacementData="right-end"
          btnTitle="Tooltip on right-end"
          tooltipText="툴팁내용"
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on &lt;br /&gt; right-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;right-start&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on right-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on &lt;br /&gt;right&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;right&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on right&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on &lt;br /&gt; right-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;right-end&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on right-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>

    </section>


    <section>
      <div class="sectionTit">
        <h2>Placement-bottom</h2>
        <p><code>propsPlacementData</code>속성에 <code>bottom-start</code>, <code>bottom</code>, <code>bottom-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on bottom-start"
          propsPlacementData="bottom-start"
          btnTitle="Tooltip on bottom-start"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on bottom"
          propsPlacementData="bottom"
          btnTitle="Tooltip on bottom"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on bottom-end"
          propsPlacementData="bottom-end"
          btnTitle="Tooltip on bottom-end"
          tooltipText="툴팁내용"
          propsPlacementY = 10
          propsPlacementX = 0
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on bottom-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;bottom-start&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on bottom-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on bottom&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;bottom&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on bottom&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on bottom-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;bottom-end&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on bottom-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&nbsp; propsPlacementY=&quot;10&quot; </p>
          <p>&nbsp; propsPlacementX=&quot;0&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>
        </pre>
      </div>

    </section>


    <section>
      <div class="sectionTit">
        <h2>Placement-left</h2>
        <p><code>propsPlacementData</code>속성에 <code>left-start</code>, <code>left</code>, <code>left-end</code> 값을 추가하여 위치값을 지정할 수 있습니다.</p>
      </div>
      <div class="example">
        <TTooltip
          btnText="Tooltip on <br /> left-start"
          propsPlacementData="left-start"
          btnTitle="Tooltip on left-start"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on <br /> left"
          propsPlacementData="left"
          btnTitle="Tooltip on left"
          tooltipText="툴팁내용"
        ></TTooltip>
        <TTooltip
          btnText="Tooltip on <br /> left-end"
          propsPlacementData="left-end"
          btnTitle="Tooltip on left-end"
          tooltipText="툴팁내용"
        ></TTooltip>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on &lt;br /&gt;left-start&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;left-start&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on left-start&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on &lt;br /&gt;left&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;left&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on left&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
          <p>&gt;&lt;/TTooltip&gt;</p>

          <p>&lt;TTooltp</p>
          <p>&nbsp; btnText=&quot;Tooltip on &lt;br /&gt;left-end&quot;</p>
          <p>&nbsp; propsPlacementData=&quot;left-end&quot; </p>
          <p>&nbsp; btnTitle=&quot;Tooltip on left-end&quot; </p>
          <p>&nbsp; tooltipText=&quot;툴팁내용&quot; </p>
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
      logText(evt) {
        if (evt.target.nextSibling.classList.contains('show')) {
          console.log('showTooltip');
        } else {
          console.log('hideTooltip');
        }
      }
    };
  }
};
</script>

<style>
</style>