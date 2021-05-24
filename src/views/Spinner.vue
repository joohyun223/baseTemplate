<template>
    <div class="conArea">
        <div class="comTit">
            <h1>Spinner</h1>
            <p>해당 컴포넌트에 클래스를 추가하여 다양한 스타일의 스피너를 활용할 수 있습니다.</p>
        </div>

        <section class="preview">
            <div class="sectionTit">
                <h2>Preview</h2>
                <p><code>TSpinner</code> 컴포넌트의 <code>spinClasses</code> 속성에 값을 넣어 스타일을 변경합니다. 텍스트를 보이지 않게 하려면 <code>TSpinTextHide</code>컴포넌트 안에 텍스트를 넣어줍니다.</p>
            </div>
            <div class="example">
              <TSpinner spinClasses="spinner-border mr-1">
                <TSpinTextHide>Loading...</TSpinTextHide>
              </TSpinner>

              <TSpinner spinClasses="spinner-grow">
                <TSpinTextHide>Loading...</TSpinTextHide>
              </TSpinner>
            </div>
            <div class="codeArea">
              <pre>
                <p>&lt;TSpinner spinClasses=&quot;spinner-border&quot;&gt;</p>
                <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt;</p>
                <p> &lt;/TSpinner&gt;</p>
                <p>&lt;TSpinner spinClasses=&quot;spinner-grow&quot;&gt;</p>
                <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt;</p>
                <p>&lt;/TSpinner&gt;</p>
              </pre>
            </div>
        </section>

        <section>
          <div class="sectionTit">
              <h2>컬러</h2>
              <p><code>.text-primary</code>, <code>.text-secondary</code> 등의 클래스를 추가하여 색을 지정할 수 있습니다.</p>
          </div>
          <div class="example">
            <TSpinner spinClasses="spinner-border text-primary mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-border text-secondary mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-border text-success mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-border text-danger mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-border text-warning mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-border text-info mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-border text-light mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-border text-dark">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
          </div>
          <div class="codeArea">
            <pre>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-primary&quot;&gt; </p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt; </p>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-secondary&quot;&gt; &nbsp;</p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt; </p>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-success&quot;&gt; &nbsp;</p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt; </p>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-danger&quot;&gt; &nbsp;</p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt; </p>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-warning&quot;&gt; &nbsp;</p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt; </p>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-info&quot;&gt; &nbsp;</p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt; </p>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-light&quot;&gt; &nbsp;</p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt; </p>
              <p>&lt;TSpinner spinClasses=&quot;spinner-border text-dark&quot;&gt; &nbsp;</p>
              <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
              <p>&lt;/TSpinner&gt;</p>
            </pre>
          </div>
        </section>

        <section>
          <div class="sectionTit">
              <h2>사이즈</h2>
              <p><code>.spinner-border-sm</code>, <code>.spinner-grow-sm</code> 등의 클래스를 추가하거나 스타일을 인라인으로 입력하여 사이즈를 지정할 수 있습니다.</p>
          </div>
          <div class="example">
            <TSpinner spinClasses="spinner-border spinner-border-sm mr-1">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            <TSpinner spinClasses="spinner-grow" style="width: 3rem; height: 3rem;">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinner>
            
          </div>
          <div class="codeArea">
              <pre>
                <p>&lt;TSpinner spinClasses=&quot;spinner-border spinner-border-sm&quot;&gt;</p>
                <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
                <p>&lt;/TSpinner&gt; </p>
                <p>&lt;TSpinner spinClasses=&quot;spinner-grow&quot; style=&quot;width: 3rem; height: 3rem;&quot;&gt;</p>
                <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
                <p>&lt;/TSpinner&gt;</p>
              </pre>
          </div>
        </section>

        <section>
          <div class="sectionTit">
              <h2>버튼</h2>
              <p><code>TSpinBtn</code>컴포넌트의 <code>spinBtnClasses</code> 속성에 클래스를 추가하여 컬러를 지정할 수 있고, <code>spinClasses</code>속성을 통해 스피너의 스타일을 지정할 수 있습니다.</p>
          </div>
          <div class="example">
            <TSpinBtn spinBtnClasses="btn-primary mr-1" spinClasses="spinner-border">
              <TSpinTextHide>Loading...</TSpinTextHide>
            </TSpinBtn>
            <TSpinBtn spinBtnClasses="btn-primary" spinClasses="spinner-grow spinner-grow-sm">
              Loading...
            </TSpinBtn>
          </div>
          <div class="codeArea">
              <pre>
                <p>&lt;TSpinBtn spinBtnClasses=&quot;btn-primary&quot; spinClasses=&quot;spinner-border&quot;&gt; </p>
                <p>&nbsp; &nbsp; &lt;TSpinTextHide&gt;Loading...&lt;/TSpinTextHide&gt; </p>
                <p>&lt;/TSpinBtn&gt; </p>
                <p>&lt;TSpinBtn spinBtnClasses=&quot;btn-primary&quot; spinClasses=&quot;spinner-grow spinner-grow-sm&quot;&gt;</p>
                <p>&nbsp; &nbsp; Loading... </p>
                <p>&lt;/TSpinBtn&gt;</p>
              </pre>
          </div>
        </section>

    </div>
</template>

<script>
import TSpinner from '../components/spinner/TSpinner.vue';
import TSpinTextHide from '../components/spinner/TSpinTextHide.vue';
import TSpinBtn from '../components/spinner/TSpinBtn.vue';
export default {
  components: {
    TSpinner,
    TSpinTextHide,
    TSpinBtn
  },
  data: () => {
    return {
      
    };
  },
  mounted: function() {
      
  },
  methods: {

  }
};
</script>

<style>

</style>