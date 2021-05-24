<template>
    <div class="conArea">
        <div class="comTit">
            <h1>Dropdown</h1>
            <p> 부트스트랩 스타일에 기반한 드롭다운 메뉴입니다.</p>
        </div>

        <section class="preview">
            <div class="sectionTit">
                <h2>Default Dropdown</h2>
            </div>
            <div class="example">
              <TDropdown classes="btn-primary" btnText="single dropdown button" @dropClicked="dropBtnEvt" @menuClicked="clickEvt" class="toggle-dropdown">
                <TDropdownMenuItem> Action </TDropdownMenuItem>
                <TDropdownMenuItem> Another action </TDropdownMenuItem>
                <TDropdownMenuItem> Something else here </TDropdownMenuItem>
              </TDropdown>
            </div>
            <div class="codeArea">
              <pre>
                <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; classes=&quot;btn-primary&quot; btnText=&quot;single dropdown button&quot; @dropClicked=&quot;dropBtnEvt&quot; @:menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                <p>&lt;/TDropdown&gt;</p>
              </pre>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>&lt;a&gt; 엘리먼트 버튼인 드롭다운 구현 </h3>
                  <p>btnType='a' 속성을 추가합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="dropdownBtn" btnType='a' classes="btn-primary" btnText="single dropdown link" @menuClicked="clickEvt" class="toggle-dropdown">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>
              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; btnType=&apos;a&apos; classes=&quot;btn-primary&quot; btnText=&quot;single dropdown link&quot; @:menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>
            
            <div class="contents">
              <div class="sectionTit">
                  <h3>드롭다운 버튼 스타일 </h3>
                  <p>classes 속성에 원하는 클래스를 추가합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="dropdownBtn" classes="btn-primary mr-3" btnText="first" @menuClicked="clickEvt" class="toggle-dropdown">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
                <TDropdown safeId="dropdownBtn" classes="btn-secondary mr-3" btnText="second" @menuClicked="clickEvt" class="toggle-dropdown">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
                <TDropdown safeId="dropdownBtn" classes="btn-success" btnText="third" @menuClicked="clickEvt" class="toggle-dropdown">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>
              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; classes=&quot;btn-primary mr-3&quot; btnText=&quot;first&quot; @menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                  <p><br></p>
                  <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; classes=&quot;btn-secondary mr-3&quot; btnText=&quot;second&quot; @menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                  <p><br></p>
                  <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; classes=&quot;btn-success&quot; btnText=&quot;third&quot; @menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Split button</h3>
                  <p>splitBtn 속성을 적용하여 분할 버튼 스타일을 정의합니다.</p>
              </div>
              <div class="example">
                <TDropdown splitBtn="splite button" safeId="splitedDopdown" classes="btn-primary" @splitClicked="splitClickEvt" @dropClicked="dropBtnEvt" @menuClicked="clickEvt">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>
              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown splitBtn=&quot;splite button&quot; safeId=&quot;splitedDopdown&quot; classes=&quot;btn-primary&quot; @splitClicked=&quot;splitClickEvt&quot; @dropClicked=&quot;dropBtnEvt&quot; @menuClicked=&quot;clickEvt&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Sizing</h3>
                  <p>.btn-lg 또는 .btn-sm 클래스를 추가하여 사이즈 조절이 가능합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="splitedDopdown" classes="btn-lg btn-primary mr-3" btnText="Large Button" @menuClicked="clickEvt">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
                <TDropdown safeId="splitedDopdown" classes="btn-sm btn-primary" btnText="Small Button" @menuClicked="clickEvt">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>

              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;splitedDopdown&quot; classes=&quot;btn-lg btn-primary mr-3&quot; btnText=&quot;Large Button&quot; @menuClicked=&quot;clickEvt&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                  <p><br></p>
                  <p>&lt;TDropdown safeId=&quot;splitedDopdown&quot; classes=&quot;btn-sm btn-primary&quot; btnText=&quot;Small Button&quot; @menuClicked=&quot;clickEvt&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Direction</h3>
                  <p>placement 속성을 적용하여 드롭다운 메뉴가 펼쳐지는 방향을 정의합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="dropdownBtn" placement="right-start" classes="btn-primary" btnText="single dropdown button" @menuClicked="clickEvt" class="toggle-dropdown">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
                <br>
                <br>
                <TDropdown safeId="dropdownBtn" placement="top-start" classes="btn-primary" btnText="single dropdown button" @menuClicked="clickEvt" class="toggle-dropdown">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
                <br>
                <br>
                <TDropdown safeId="dropdownBtn" placement="left-start" classes="btn-primary" btnText="single dropdown button" @menuClicked="clickEvt" class="toggle-dropdown">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>

              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; placement=&quot;right-start&quot; classes=&quot;btn-primary mr-5&quot; btnText=&quot;single dropdown button&quot; @menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                  <p><br></p>
                  <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; placement=&quot;top-start&quot; classes=&quot;btn-primary&quot; btnText=&quot;single dropdown button&quot; @menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                  <p><br></p>
                  <p>&lt;TDropdown safeId=&quot;dropdownBtn&quot; placement=&quot;left-start&quot; classes=&quot;btn-primary&quot; btnText=&quot;single dropdown button&quot; @menuClicked=&quot;clickEvt&quot; class=&quot;toggle-dropdown&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Active</h3>
                  <p>&lt;TDropdownMenuItem&gt; 컴포넌트의 active 속성을 적용하여 드롭다운 아이템의 활성여부를 결정합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="splitedDopdown" classes="btn-primary" btnText="active dropdown" @menuClicked="clickEvt">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem active> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>

              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;splitedDopdown&quot; classes=&quot;btn-primary&quot; btnText=&quot;active/disabled dropdown&quot; @menuClicked=&quot;clickEvt&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem active&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Disabled</h3>
                  <p>&lt;TDropdownMenuItem&gt; 컴포넌트의 disabled 속성을 적용하여 드롭다운 아이템의 비활성여부를 결정합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="splitedDopdown" classes="btn-primary" btnText="disabled dropdown" @menuClicked="clickEvt">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem disabled> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>

              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;splitedDopdown&quot; classes=&quot;btn-primary&quot; btnText=&quot;active/disabled dropdown&quot; @menuClicked=&quot;clickEvt&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem disabled&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Dividers</h3>
                  <p>&lt;TDropdownMenuItem&gt; 컴포넌트의 divider 속성을 적용하여 드롭다운 아이템을 구분하는 구분선을 추가합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="splitedDopdown" classes="btn-primary" btnText="disabled dropdown" @menuClicked="clickEvt">
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem divider></TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>

              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;splitedDopdown&quot; classes=&quot;btn-primary&quot; btnText=&quot;disabled dropdown&quot; @menuClicked=&quot;clickEvt&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem divider&gt;&lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Header</h3>
                  <p>&lt;TDropdownMenuItem&gt; 컴포넌트의 header 속성을 적용하여 아이템 섹션에 헤더를 추가합니다.</p>
              </div>
              <div class="example">
                <TDropdown safeId="splitedDopdown" classes="btn-primary" btnText="disabled dropdown" @menuClicked="clickEvt">
                  <TDropdownMenuItem header> item header </TDropdownMenuItem>
                  <TDropdownMenuItem> Action </TDropdownMenuItem>
                  <TDropdownMenuItem> Another action </TDropdownMenuItem>
                  <TDropdownMenuItem divider></TDropdownMenuItem>
                  <TDropdownMenuItem> Something else here </TDropdownMenuItem>
                </TDropdown>
              </div>

              <div class="codeArea">
                <pre>
                  <p>&lt;TDropdown safeId=&quot;splitedDopdown&quot; classes=&quot;btn-primary&quot; btnText=&quot;disabled dropdown&quot; @menuClicked=&quot;clickEvt&quot;&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem header&gt; Action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Another action &lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem divider&gt;&lt;/TDropdownMenuItem&gt;</p>
                  <p>&nbsp; &lt;TDropdownMenuItem&gt; Something else here &lt;/TDropdownMenuItem&gt;</p>
                  <p>&lt;/TDropdown&gt;</p>
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
                              <td>splitBtn</td>
                              <td>String</td>
                              <td></td>
                              <td>Split button 구현 시 버튼 텍스트 지정</td>
                          </tr>
                          <tr>
                              <td>safeId</td>
                              <td>String</td>
                              <td></td>
                              <td>드롭다운 버튼의 id 값 / 드롭다운 메뉴의 aria-labelledby 속성 값 지정</td>
                          </tr>
                          <tr>
                              <td>btnText</td>
                              <td>String</td>
                              <td>'Dropdown Button'</td>
                              <td>Default dropdown 버튼 텍스트 지정 </td>
                          </tr>
                          <tr>
                              <td>btnType</td>
                              <td>String</td>
                              <td>'button'</td>
                              <td>드롭다운 버튼의 태그 지정</td>
                          </tr>
                          <tr>
                              <td>classes</td>
                              <td>String</td>
                              <td></td>
                              <td>드롭다운 버튼의 클래스 지정</td>
                          </tr>
                          <tr>
                              <td>placement</td>
                              <td>String</td>
                              <td>'bottom-start'</td>
                              <td>드롭다운 오픈 시 열리는 방향 지정
                                <br>
                                'top-end', 'top', 'top-start',
                                'bottom-end', 'bottom', 'bottom-start',
                                'right-start', 'right', 'right-end',
                                'left-start', 'left', 'left-end'
                              </td>
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
                          <td>@menuClicked</td>
                          <td>Function</td>
                          <td>메뉴아이템 선택 시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                      <tr>
                          <td>@dropClicked</td>
                          <td>Function</td>
                          <td>드롭버튼 선택 시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                      <tr>
                          <td>@splitClicked</td>
                          <td>Function</td>
                          <td>split button 선택 시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="contents">
            <div class="sectionTit">
              <h2> &lt;TDropdownMenuItem&gt; </h2>
              <p>드롭다운의 아이템을 구성하는 컴포넌트입니다.</p>
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
                            <td>active</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>해당 아이템의 active 속성 지정</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>해당 아이템의 disabled 속성 지정</td>
                        </tr>
                        <tr>
                            <td>divider</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>구분선을 추가합니다</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>헤더를 추가합니다 </td>
                        </tr>
                    </tbody>
                </table>
            </section>
          </div>
        </section>
    </div>
</template>

<script>
import TDropdown from '@/components/dropdown/TDropdown.vue';
import TDropdownMenuItem from '@/components/dropdown/TDropdownMenuItem.vue';

export default {
  components: {
    TDropdown,
    TDropdownMenuItem
  },
  data: () => {
    return {
      dropdownData: [
        'Action',
        'Another action',
        'Something else here'
      ],
      dropdownData2: [
        'Action',
        'Another action',
        'Something else here',
        {
          divider: true
        },
        'Separated link'
      ],
      dropdownData3: [
        {
          text  : 'Action',
          active: true
        },
        'Another action',
        'Something else here',
        {
          divider: true
        },
        {
          text    : 'Separated link',
          disabled: true
        }
        
      ]
    };
  },
  methods: {
    clickEvt: function(evt) {
      evt.preventDefault();
      alert([].indexOf.call(evt.target.parentNode.querySelectorAll('.dropdown-item'), evt.target)+'번째 메뉴 클릭');
    },
    splitClickEvt: function(evt) {
      evt.preventDefault();
      alert(evt.target.textContent+' 클릭');
    },
    dropBtnEvt: function(open) {
      console.log('is dropdown open?', open);
    }
  }
};
</script>

<style>

</style>