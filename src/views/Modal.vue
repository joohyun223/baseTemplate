<template>
  <div class="conArea">
    <div class="comTit">
        <h1>Modal</h1>
        <p><code>TModal</code> 컴포넌트의 커스텀된 속성에 부트스트랩의 value를 넣어 다양하게 활용할 수 있습니다.</p>
    </div>

    <section>
      <div class="sectionTit">
          <h2>Preview</h2>
          <p><code>TModal</code>컴포넌트를 이용해 모달을 띄울 수 있습니다. <br />
          향상된 접근성을 위하여 <code>ariaLabelledby</code>에 모달의 설명을 기입합니다. <br />
          <code>btntext</code> 속성을 통해 <code>TModalBtn</code>컴포넌트의 텍스트를 바꿀 수 있습니다. <br />
          <code>headerText</code>속성을 통해 모달의 타이틀을 바꿀 수 있습니다. <br />
          <code>footerCloseText</code>속성을 통해 모달 footer부분의 닫기버튼의 텍스트를 바꿀 수 있습니다. <br /><code>footerSaveText</code>속성을 통해 모달 footer부분의 확인버튼의 텍스트를 바꿀 수 있습니다.</p>
      </div>
      <div class="example">       
        <TModal 
          @showModal="logText"
          @closeModal="logText"
          @confirmBtnClicked="logConfirmText"
          btntext="show modal!"
          ariaLabelledby="modalDescription"
          headerText="모달 타이틀"
          footerCloseText="닫기"
          footerSaveText="확인"
        >
          <div slot="modalBodyText">모달 내용텍스트</div>
        </TModal>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TModal</p>
          <p>&nbsp; @showModal=&quot;logText&quot;</p>
          <p>&nbsp; @closeModal=&quot;logText&quot;</p>
          <p>&nbsp; @confirmBtnClicked=&quot;logConfirmText&quot;</p>
          <p>&nbsp; btntext=&quot;show modal&quot;</p>
          <p>&nbsp; ariaLabelledby=&quot;modalDescription&quot;</p>
          <p>&nbsp; headerText=&quot;모달 타이틀&quot; </p>
          <p>&nbsp; footerCloseText=&quot;닫기&quot; </p>
          <p>&nbsp; footerSaveText=&quot;확인&quot; </p>
          <p>&nbsp; &gt; </p>
          <p>&nbsp; &nbsp; &lt;div slot=&quot;modalBodyText&quot;&gt;모달 내용텍스트&lt;/div&gt; </p>
          <p>&lt;/TModal&gt;</p>
        </pre>
      </div>
    </section>

    <section>
      <div class="sectionTit">
          <h2>스크롤 설정</h2>
          <p><code>modaldialogClasses</code>속성에 <code>modal-dialog-scrollable</code>를 추가합니다.</p>
      </div>
      <div class="example">
        <TModal 
          @showModal="logText"
          @closeModal="logText"
          @confirmBtnClicked="logConfirmText"
          btntext="스크롤설정"
          ariaLabelledby="modaldescription2"
          headerText="모달 타이틀"
          footerCloseText="닫기"
          footerSaveText="확인"
          modaldialogClasses="modal-dialog-scrollable"
        >
          <div slot="modalBodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem dui, tempus et condimentum at, mattis eu felis. Nullam et scelerisque massa. Praesent dapibus turpis eu felis viverra rhoncus ut et nisi. In sagittis consectetur egestas. Sed accumsan, dolor ut tincidunt ullamcorper, mauris lorem tincidunt ante, ac vulputate felis neque in arcu. Curabitur dictum tincidunt ultricies. Sed et consectetur velit. Cras semper enim lectus, id fermentum tellus finibus a. Duis tellus nunc, mollis sit amet nibh quis, euismod bibendum magna.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas fermentum a odio ut congue. Aenean ex purus, accumsan et nunc sed, molestie ullamcorper mi. Integer aliquet rhoncus pharetra. Fusce ac placerat est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit sagittis purus eget maximus. Ut egestas maximus mollis.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem dui, tempus et condimentum at, mattis eu felis. Nullam et scelerisque massa. Praesent dapibus turpis eu felis viverra rhoncus ut et nisi. In sagittis consectetur egestas. Sed accumsan, dolor ut tincidunt ullamcorper, mauris lorem tincidunt ante, ac vulputate felis neque in arcu. Curabitur dictum tincidunt ultricies. Sed et consectetur velit. Cras semper enim lectus, id fermentum tellus finibus a. Duis tellus nunc, mollis sit amet nibh quis, euismod bibendum magna.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas fermentum a odio ut congue. Aenean ex purus, accumsan et nunc sed, molestie ullamcorper mi. Integer aliquet rhoncus pharetra. Fusce ac placerat est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit sagittis purus eget maximus. Ut egestas maximus mollis.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem dui, tempus et condimentum at, mattis eu felis. Nullam et scelerisque massa. Praesent dapibus turpis eu felis viverra rhoncus ut et nisi. In sagittis consectetur egestas. Sed accumsan, dolor ut tincidunt ullamcorper, mauris lorem tincidunt ante, ac vulputate felis neque in arcu. Curabitur dictum tincidunt ultricies. Sed et consectetur velit. Cras semper enim lectus, id fermentum tellus finibus a. Duis tellus nunc, mollis sit amet nibh quis, euismod bibendum magna.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas fermentum a odio ut congue. Aenean ex purus, accumsan et nunc sed, molestie ullamcorper mi. Integer aliquet rhoncus pharetra. Fusce ac placerat est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit sagittis purus eget maximus. Ut egestas maximus mollis.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem dui, tempus et condimentum at, mattis eu felis. Nullam et scelerisque massa. Praesent dapibus turpis eu felis viverra rhoncus ut et nisi. In sagittis consectetur egestas. Sed accumsan, dolor ut tincidunt ullamcorper, mauris lorem tincidunt ante, ac vulputate felis neque in arcu. Curabitur dictum tincidunt ultricies. Sed et consectetur velit. Cras semper enim lectus, id fermentum tellus finibus a. Duis tellus nunc, mollis sit amet nibh quis, euismod bibendum magna.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas fermentum a odio ut congue. Aenean ex purus, accumsan et nunc sed, molestie ullamcorper mi. Integer aliquet rhoncus pharetra. Fusce ac placerat est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit sagittis purus eget maximus. Ut egestas maximus mollis.
          </div>
        </TModal>
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TModal</p>
          <p>&nbsp; @showModal=&quot;logText&quot;</p>
          <p>&nbsp; @closeModal=&quot;logText&quot;</p>
          <p>&nbsp; @confirmBtnClicked=&quot;logConfirmText&quot;</p>
          <p>&nbsp; btntext=&quot;스크롤설정&quot; </p>
          <p>&nbsp; ariaLabelledby=&quot;modaldescription2&quot; </p>
          <p>&nbsp; headerText=&quot;모달 타이틀&quot; </p>
          <p>&nbsp; footerCloseText=&quot;닫기&quot; </p>
          <p>&nbsp; footerSaveText=&quot;확인&quot; </p>
          <p>&nbsp; modaldialogClasses=&quot;modal-dialog-scrollable&quot;</p>
          <p> &gt; </p>
          <p>&nbsp; &nbsp; &lt;div slot=&quot;modalBodyText&quot;&gt; 모달 내용 영역 &lt;/div&gt; </p>
          <p>&lt;/TModal&gt;</p>
        </pre>
      </div>
    </section>

    <section>
      <div class="sectionTit">
          <h2>수직 중앙으로 위치설정</h2>
          <p><code>modaldialogClasses</code>속성에 <code>modal-dialog-centered</code>를 추가하면 화면 가운데에 위치합니다. 스크롤도 가능하게 하려면 <code>modal-dialog-scrollable</code>도 추가합니다.</p>
      </div>
      <div class="example">
        <TModal 
          @showModal="logText"
          @closeModal="logText"
          @confirmBtnClicked="logConfirmText"
          btntext="위치설정"
          ariaLabelledby="modalDescription"
          headerText="모달 타이틀"
          footerCloseText="닫기"
          footerSaveText="확인"
          modaldialogClasses="modal-dialog-scrollable modal-dialog-centered"
        >
          <div slot="modalBodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem dui, tempus et condimentum at, mattis eu felis. Nullam et scelerisque massa. Praesent dapibus turpis eu felis viverra rhoncus ut et nisi. In sagittis consectetur egestas. Sed accumsan, dolor ut tincidunt ullamcorper, mauris lorem tincidunt ante, ac vulputate felis neque in arcu. Curabitur dictum tincidunt ultricies. Sed et consectetur velit. Cras semper enim lectus, id fermentum tellus finibus a. Duis tellus nunc, mollis sit amet nibh quis, euismod bibendum magna.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas fermentum a odio ut congue. Aenean ex purus, accumsan et nunc sed, molestie ullamcorper mi. Integer aliquet rhoncus pharetra. Fusce ac placerat est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit sagittis purus eget maximus. Ut egestas maximus mollis.
          </div>
        </TModal>      
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TModal</p>
          <p>&nbsp; @showModal=&quot;logText&quot;</p>
          <p>&nbsp; @closeModal=&quot;logText&quot;</p>
          <p>&nbsp; @confirmBtnClicked=&quot;logConfirmText&quot;</p>
          <p>&nbsp; btntext=&quot;위치설정&quot;</p>
          <p>&nbsp; ariaLabelledby=&quot;modalDescription&quot;</p>
          <p>&nbsp; headerText=&quot;모달 타이틀&quot;</p>
          <p>&nbsp; footerCloseText=&quot;닫기&quot;</p>
          <p>&nbsp; footerSaveText=&quot;확인&quot;</p>
          <p>&nbsp; modaldialogClasses=&quot;modal-dialog-scrollable modal-dialog-centered&quot;</p>
          <p>&gt;</p>
          <p>&nbsp; &nbsp; &lt;div slot=&quot;modalBodyText&quot;&gt;모달 내용 영역&lt;/div&gt;</p>
          <p>&lt;/TModal&gt;</p>
        </pre>
      </div>
    </section>

    <section>
      <div class="sectionTit">
        <h3>사이즈</h3>
        <p><code>modaldialogClasses</code>속성에 <code>.modal-sm</code>, <code>.modal-lg</code>, <code>.modal-xl</code>클래스를 추가하여 모달의 사이즈를 지정할 수 있습니다.</p>
      </div>
        <div class="example">
          <TModal 
            @showModal="logText"
            @closeModal="logText"
            @confirmBtnClicked="logConfirmText"
            btntext="작은 사이즈"
            ariaLabelledby="modalDescription"
            headerText="모달 타이틀"
            footerCloseText="닫기"
            footerSaveText="확인"
            modaldialogClasses="modal-sm"
          >
            <div slot="modalBodyText">
              Lorem ipsum dolor 
            </div>
          </TModal>    
          
          <TModal 
            @showModal="logText"
            @closeModal="logText"
            @confirmBtnClicked="logConfirmText"
            btntext="큰 사이즈"
            ariaLabelledby="modalDescription"
            headerText="모달 타이틀"
            footerCloseText="닫기"
            footerSaveText="확인"
            modaldialogClasses="modal-lg"
          >
            <div slot="modalBodyText">
              Lorem ipsum dolor 
            </div>
          </TModal>  

          <TModal 
            @showModal="logText"
            @closeModal="logText"
            @confirmBtnClicked="logConfirmText"
            btntext="매우 큰 사이즈"
            ariaLabelledby="modalDescription"
            headerText="모달 타이틀"
            footerCloseText="닫기"
            footerSaveText="확인"
            modaldialogClasses="modal-xl"
          >
            <div slot="modalBodyText">
              Lorem ipsum dolor 
            </div>
          </TModal>    
      </div>
      <div class="codeArea">
        <pre>
          <p>&lt;TModal</p>
          <p>&nbsp; @showModal=&quot;logText&quot;</p>
          <p>&nbsp; @closeModal=&quot;logText&quot;</p>
          <p>&nbsp; @confirmBtnClicked=&quot;logConfirmText&quot;</p>
          <p>&nbsp; btntext=&quot;작은 사이즈&quot;</p>
          <p>&nbsp; ariaLabelledby=&quot;modalDescription&quot;</p>
          <p>&nbsp; headerText=&quot;모달 타이틀&quot;</p>
          <p>&nbsp; footerCloseText=&quot;닫기&quot;</p>
          <p>&nbsp; footerSaveText=&quot;확인&quot;</p>
          <p>&nbsp; modaldialogClasses=&quot;modal-sm&quot;</p>
          <p>&gt;</p>
          <p>&nbsp; &nbsp; &lt;div slot=&quot;modalBodyText&quot;&gt;Lorem ipsum dolor &lt;/div&gt;</p>
          <p>&lt;/TModal&gt;</p>

          <p>&lt;TModal</p>
          <p>&nbsp; @showModal=&quot;logText&quot;</p>
          <p>&nbsp; @closeModal=&quot;logText&quot;</p>
          <p>&nbsp; @confirmBtnClicked=&quot;logConfirmText&quot;</p>
          <p>&nbsp; btntext=&quot;큰 사이즈&quot;</p>
          <p>&nbsp; ariaLabelledby=&quot;modalDescription&quot;</p>
          <p>&nbsp; headerText=&quot;모달 타이틀&quot;</p>
          <p>&nbsp; footerCloseText=&quot;닫기&quot;</p>
          <p>&nbsp; footerSaveText=&quot;확인&quot;</p>
          <p>&nbsp; modaldialogClasses=&quot;modal-lg&quot;</p>
          <p>&gt;</p>
          <p>&nbsp; &nbsp; &lt;div slot=&quot;modalBodyText&quot;&gt;Lorem ipsum dolor &lt;/div&gt;</p>
          <p>&lt;/TModal&gt;</p>

          <p>&lt;TModal</p>
          <p>&nbsp; @showModal=&quot;logText&quot;</p>
          <p>&nbsp; @closeModal=&quot;logText&quot;</p>
          <p>&nbsp; @confirmBtnClicked=&quot;logConfirmText&quot;</p>
          <p>&nbsp; btntext=&quot;매우 큰 사이즈&quot;</p>
          <p>&nbsp; ariaLabelledby=&quot;modalDescription&quot;</p>
          <p>&nbsp; headerText=&quot;모달 타이틀&quot;</p>
          <p>&nbsp; footerCloseText=&quot;닫기&quot;</p>
          <p>&nbsp; footerSaveText=&quot;확인&quot;</p>
          <p>&nbsp; modaldialogClasses=&quot;modal-xl&quot;</p>
          <p>&gt;</p>
          <p>&nbsp; &nbsp; &lt;div slot=&quot;modalBodyText&quot;&gt;Lorem ipsum dolor &lt;/div&gt;</p>
          <p>&lt;/TModal&gt;</p>
        </pre>
      </div>
      <table>
        <colgroup>
            <col width="20%"/>
            <col width="40%"/>
            <col width="40%"/>
        </colgroup>
        <thead>
            <tr>
                <th>Size</th>
                <th>Class</th>
                <th>Modal max-width</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Small</td>
                <td><code>.modal-sm</code></td>
                <td><code>300px</code></td>
            </tr>
            <tr>
                <td>Default</td>
                <td>None</td>
                <td><code>500px</code></td>
            </tr>
            <tr>
                <td>Large</td>
                <td><code>.modal-lg</code></td>
                <td><code>800px</code></td>
            </tr>
            <tr>
                <td>Extra large</td>
                <td><code>.modal-xl</code></td>
                <td><code>1140px</code></td>
            </tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script>
import TModal from '../components/modal/TModal.vue';

export default {
  components: {
    TModal

  },
  data: () => {
    return {

    };
  },
  methods: {
    logText(evt) {
      let target = evt.target;
      
      if (target.ariaLabel === 'Close' || target.classList.contains('modal')) {
        console.log('closeModal');
      } else {
        console.log('showModal');
      }
    },
    logConfirmText() {
      console.log('confirm btn clicked');
    }
  }
};
</script>

<style>

</style>