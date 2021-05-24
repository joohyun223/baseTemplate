<template>
  <div class="conArea">
          <div class="comTit">
              <h1>Forms</h1>
              <p>부트스트랩에 기반한 폼 양식, 스타일, 레이아웃 옵션등의 예제입니다.</p>
              <p> &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt; 등의 폼 양식은 .form-control 클래스에 의해 스타일(일반적인 모양, 포커스 상태, 사이징 등 )이 정의됩니다.  </p>
          </div>

          <section class="preview">
            <h2> Form, Input, Checkbox </h2>
            <div class="example">
              <TForm>
                <TInput safeId="exampleInputEmail1" classes="form-control" type="email" ariaDescby="emailHelp" placeholder="Email address" label="Email address">
                  <small id="emailHelp"  class="form-text text-muted">We'll never share your email with anyone else.</small>
                </TInput>
                <TInput safeId="exampleInputPassword1" classes="form-control" type="password" placeholder="Password" label="Password"/>
                <TCheckBox @change="changeEvt" safeId="exampleCheck1" classes="form-check-input" label="Check me out"/>
                <TButton type="submit" class="btn btn-primary">Submit</TButton>
              </TForm>
            </div>
            <div class="codeArea">
              <pre>
                <p>&lt;TForm&gt;</p>
                <p>&nbsp; &lt;TInput safeId=&quot;exampleInputEmail1&quot; classes=&quot;form-control&quot; type=&quot;email&quot; ariaDescby=&quot;emailHelp&quot; placeholder=&quot;Email address&quot; label=&quot;Email address&quot;&gt;</p>
                <p>&nbsp; &nbsp; &lt;small id=&quot;emailHelp&quot; &nbsp;class=&quot;form-text text-muted&quot;&gt;We&apos;ll never share your email with anyone else.&lt;/small&gt;</p>
                <p>&nbsp; &lt;/TInput&gt;</p>
                <p>&nbsp; &lt;TInput safeId=&quot;exampleInputPassword1&quot; classes=&quot;form-control&quot; type=&quot;password&quot; placeholder=&quot;Password&quot; label=&quot;Password&quot;/&gt;</p>
                <p>&nbsp; &lt;TCheckBox @change="changeEvt" safeId=&quot;exampleCheck1&quot; classes=&quot;form-check-input&quot; label=&quot;Check me out&quot;/&gt;</p>
                <p>&nbsp; &lt;TButton type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/TButton&gt;</p>
                <p>&lt;/TForm&gt;</p>
              </pre>
            </div>

            <div class="example">
              <div class="sectionTit">
                <p> 파일 인풋의 경우 .form-control-file 클래스를 씁니다. </p>
              </div>
              <form>
                <TInput safeId="exampleFormControlFile1" classes="form-control-file" type="file" label="Example file input"/>
              </form>
            </div>
            <div class="codeArea">
              <pre>
                <p>&lt;TInput safeId=&quot;exampleFormControlFile1&quot; classes=&quot;form-control-file&quot; type=&quot;file&quot; label=&quot;Example file input&quot;/&gt;</p>
              </pre>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h3>Sizing</h3>
                  <p>.form-control-lg 또는 .form-control-sm 클래스를 추가하여 사이즈 조절이 가능합니다.</p>
              </div>
              <div class="example">
                <TInput classes="form-control form-control-lg" type="text" placeholder=".form-control-lg"/>
                <TInput classes="form-control" type="text" placeholder="Default input"/>
                <TInput classes="form-control form-control-sm" type="text" placeholder=".form-control-sm"/>

              </div>
              <div class="codeArea">
                <pre>
                  <p>&lt;TInput classes=&quot;form-control form-control-lg&quot; type=&quot;text&quot; placeholder=&quot;.form-control-lg&quot;/&gt;</p>
                  <p>&lt;TInput classes=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Default input&quot;/&gt;</p>
                  <p>&lt;TInput classes=&quot;form-control form-control-sm&quot; type=&quot;text&quot; placeholder=&quot;.form-control-sm&quot;/&gt;</p>
                </pre>
              </div>
            </div>

            <div class="contents">
                <div class="sectionTit">
                    <h3>readonly</h3>
                    <p> input에 readonly 속성 추가시 input의 수정을 방지합니다.</p>
                </div>
                <div class="example">
                  <TInput classes="form-control" type="text" placeholder="Readonly input here..." readonly/>
                </div>
                <div class="codeArea">
                  <pre>
                    <p>&lt;TInput classes=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Readonly input here...&quot; readonly/&gt;</p>
                  </pre>
                </div>
            </div>

            <div class="contents">
                <div class="sectionTit">
                    <h3>Readonly plain text</h3>
                    <p> 플레인 텍스트 스타일의 &lt;input readonly&gt;&nbsp; 엘리먼트를 적용 시 .form-control-plaintext 클래스를 추가하여 기존 필드 스타일 양식을 제거합니다. </p>
                </div>
                <div class="example">
                    <TInput safeId="staticEmail" classes="form-control-plaintext" type="text" placeholder="Readonly input here..." value="email@example.com" label="Email" readonly/>
                </div>
                <div class="codeArea">
                  <pre>
                    <p>&lt;TInput safeId=&quot;staticEmail&quot; classes=&quot;form-control-plaintext&quot; type=&quot;text&quot; placeholder=&quot;Readonly input here...&quot; value=&quot;email@example.com&quot; label=&quot;Email&quot; readonly/&gt;</p>
                  </pre>
                </div>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h2> &lt;TForm&gt; </h2>
                  <p> form 컴포넌트 입니다. 필요에 따라 inline 속성을 추가하여 가로로 배치 할 수 있습니다.</p>
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
                              <td>inline</td>
                              <td>Boolean</td>
                              <td>false</td>
                              <td>폼 내부 요소의 배치 여부(inline 추가 시 horizontal하게 배치됩니다)</td>
                          </tr>
                      </tbody>
                  </table>
              </section>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h2> &lt;TInput&gt; </h2>
                  <p> input 컴포넌트 입니다. input, label, slot contents를 포함하여 .form-group 클래스로 그룹핑 됩니다.</p>
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
                              <td>classes</td>
                              <td>String</td>
                              <td></td>
                              <td>input의 클래스 지정</td>
                          </tr>
                          <tr>
                              <td>type</td>
                              <td>String</td>
                              <td>'text'</td>
                              <td>input의 타입 속성 지정</td>
                          </tr>
                          <tr>
                              <td>safeId</td>
                              <td>String</td>
                              <td>null</td>
                              <td>input의 id 값 지정</td>
                          </tr>
                          <tr>
                              <td>placeholder</td>
                              <td>String</td>
                              <td></td>
                              <td>input의 placeholder 값 지정</td>
                          </tr>
                          <tr>
                              <td>value</td>
                              <td>String</td>
                              <td></td>
                              <td>input의 value 값 지정</td>
                          </tr>
                          <tr>
                              <td>readonly</td>
                              <td>Boolean</td>
                              <td>false</td>
                              <td>input의 readonly 속성 지정</td>
                          </tr>
                          <tr>
                              <td>disabled</td>
                              <td>Boolean</td>
                              <td>false</td>
                              <td>input의 disabled 속성 지정</td>
                          </tr>
                          <tr>
                              <td>label</td>
                              <td>String</td>
                              <td></td>
                              <td>label의 텍스트 값 지정</td>
                          </tr>
                          <tr>
                              <td>ariaDescby</td>
                              <td>String</td>
                              <td></td>
                              <td>input의 aria-describedby 속성 값 지정</td>
                          </tr>
                          <tr>
                              <td>horizontal</td>
                              <td>Boolean</td>
                              <td>false</td>
                              <td>form-group의 배치를 horizontal하게 배치</td>
                          </tr>
                      </tbody>
                  </table>
              </section>
            </div>

            <div class="contents">
              <div class="sectionTit">
                  <h2> &lt;TCheckBox &gt; </h2>
                  <p> checkbox 컴포넌트 입니다.</p>
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
                              <td>classes</td>
                              <td>String</td>
                              <td></td>
                              <td>input의 클래스 지정</td>
                          </tr>
                          <tr>
                              <td>type</td>
                              <td>String</td>
                              <td>'checkbox'</td>
                              <td>input의 타입 속성 지정</td>
                          </tr>
                          <tr>
                              <td>safeId</td>
                              <td>String</td>
                              <td>null</td>
                              <td>input의 id 값 지정</td>
                          </tr>
                          <tr>
                              <td>value</td>
                              <td>String</td>
                              <td></td>
                              <td>input의 value 값 지정</td>
                          </tr>
                          <tr>
                              <td>disabled</td>
                              <td>Boolean</td>
                              <td>false</td>
                              <td>input의 disabled 속성 지정</td>
                          </tr>
                          <tr>
                              <td>label</td>
                              <td>String</td>
                              <td></td>
                              <td>label의 텍스트 값 지정</td>
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
                          <td>@change</td>
                          <td>Function</td>
                          <td>체크박스 클릭 시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </section>


          <section class="preview">
            <h2>Select, Textarea</h2>
            <div class="example">
              <TForm>
                <TSelect @change="selectEvt" safeId="exampleFormControlSelect1" classes="form-control" :optionList="optionList" placeholder="Please select" label="Example default select"></TSelect>
                <TSelect safeId="exampleFormControlSelect2" classes="form-control" :optionList="optionList2" label="Example custom data select"></TSelect>
                <TSelect safeId="exampleFormControlSelect3" value="Option 2" classes="form-control" :optionList="optionList" multiple label="Example multiple select"></TSelect>
                <TTextarea safeId="exampleFormControlTextarea1" classes="form-control" label="Example textarea" rows="3"></TTextarea>
              </TForm>
            </div>
            <div class="codeArea">
              <pre>
                <p>&lt;TForm&gt; &nbsp;</p>
                <p>&lt;TSelect @change=&quot;selectEvt&quot; safeId=&quot;exampleFormControlSelect1&quot; classes=&quot;form-control&quot; :optionList=&quot;optionList&quot; placeholder=&quot;Please select&quot; label=&quot;Example default select&quot;&gt;&lt;/TSelect&gt;</p>
                <p>&lt;TSelect safeId=&quot;exampleFormControlSelect2&quot; classes=&quot;form-control&quot; :optionList=&quot;optionList2&quot; label=&quot;Example custom data select&quot;&gt;&lt;/TSelect&gt; &nbsp;</p>
                <p>&lt;TSelect safeId=&quot;exampleFormControlSelect3&quot; value=&quot;Option 2&quot; classes=&quot;form-control&quot; :optionList=&quot;optionList&quot; multiple label=&quot;Example multiple select&quot;&gt;&lt;/TSelect&gt; &nbsp;</p>
                <p>&lt;TTextarea safeId=&quot;exampleFormControlTextarea1&quot; classes=&quot;form-control&quot; label=&quot;Example textarea&quot; rows=&quot;3&quot;&gt;&lt;/TTextarea&gt; </p>
                <p>&lt;/TForm&gt;</p>
              </pre>
            </div>

            <div class="contents">
              <div class="sectionTit">
                <h2> &lt;TSelect&gt; </h2>
                <p> select 컴포넌트 입니다.</p>
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
                              <td>optionList</td>
                              <td>Array</td>
                              <td>null</td>
                              <td>셀렉트 내의 옵션 데이터
                                <div class="codeArea">
                                  <pre>
                                    <p>optionList: [&apos;Option 1&apos;, &apos;Option 2&apos;, &apos;Option 3&apos;, &apos;Option 4&apos;, &apos;Option 5&apos;],</p>
                                    <p>optionList2: [</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &apos;Option 1&apos;, &apos;Option 2&apos;, &apos;Option 3&apos;,</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { &nbsp;&nbsp;</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //커스텀 옵션&nbsp;</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; value &nbsp; : &apos;some value4&apos;, //옵션 밸류</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label &nbsp; : &apos;Selected option4 with selected&apos;, //옵션 텍스트</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; selected: true //selected여부</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; },</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; {&nbsp;</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; value &nbsp; : &apos;some value5&apos;,&nbsp;</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; label &nbsp; : &apos;Selected option5 with disabled&apos;,</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; disabled: true //disabled 여부</p>
                                    <p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>
                                    <p>]</p>
                                  </pre>
                                </div>
                              </td>
                          </tr>
                          <tr>
                              <td>classes</td>
                              <td>String</td>
                              <td></td>
                              <td>select의 클래스 지정</td>
                          </tr>
                          <tr>
                              <td>safeId</td>
                              <td>String</td>
                              <td></td>
                              <td>셀렉트의 id 값 지정</td>
                          </tr>
                          <tr>
                              <td>placeholder</td>
                              <td>String</td>
                              <td></td>
                              <td>셀렉트의 placeholder 값 지정</td>
                          </tr>
                          <tr>
                              <td>value</td>
                              <td>String</td>
                              <td></td>
                              <td>셀렉트의 초기 옵션 지정</td>
                          </tr>
                          <tr>
                              <td>label</td>
                              <td>String</td>
                              <td></td>
                              <td>label의 텍스트 값 지정</td>
                          </tr>
                          <tr>
                              <td>multiple</td>
                              <td>Boolean</td>
                              <td>false</td>
                              <td>셀렉트의 multiple 속성 여부</td>
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
                          <td>@change</td>
                          <td>Function</td>
                          <td>옵션 선택 시 지정한 이벤트가 트리거 됩니다.</td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </section>

          <div class="comTit">
              <h1>Layout</h1>
              <p>폼은 기본적으로 세로로 쌓이듯 정렬됩니다. 별도의 클래스를 추가하여 다양한 레이아웃을 정의할 수 있습니다.</p>
          </div>

          <section class="preview">
              <h2> Form Grouping </h2>
              <div class="example">
                &lt;TFormGroup&gt; 사용 예제
                <TFormGroup wrapperClasses="wrapperClass">
                  <label for="formGroupExampleInput-1">Example label</label>
                  <input type="text" class="form-control" id="formGroupExampleInput-1" placeholder="Example input placeholder">
                </TFormGroup>
                <TFormGroup inline wrapperClasses="inlineWrapper">
                  <label for="formGroupExampleInput-2">Example label</label>
                  <input type="text" class="form-control ml-2" id="formGroupExampleInput-2" placeholder="Example input placeholder">
                </TFormGroup>

                &lt;TInput&gt; 사용 예제
                <TInput label="Example label" type="text" classes="form-control" safeId="formGroupExampleInput-3" placeholder="Example input placeholder"/>
                <TInput horizontal label="Example label" type="text" classes="form-control ml-2" safeId="formGroupExampleInput-4" placeholder="Example input placeholder"/>
              </div>
              <div class="codeArea">
                  &lt;TFormGroup&gt; 사용 예제
                <pre>
                  <p>&lt;TFormGroup wrapperClasses=&quot;wrapperClass&quot;&gt;</p>
                  <p><span style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span>&lt;label for=&quot;formGroupExampleInput-1&quot;&gt;Example label&lt;/label&gt;</p>
                  <p>&nbsp; &nbsp; &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;formGroupExampleInput-1&quot; placeholder=&quot;Example input placeholder&quot;&gt;</p>
                  <p>&lt;/TFormGroup&gt;</p>
                  <p>&lt;TFormGroup inline wrapperClasses=&quot;inlineWrapper&quot;&gt;</p>
                  <p>&nbsp; <span style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span>&lt;label for=&quot;formGroupExampleInput-2&quot;&gt;Example label&lt;/label&gt;</p>
                  <p>&nbsp; <span style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span>&lt;input type=&quot;text&quot; class=&quot;form-control ml-2&quot; id=&quot;formGroupExampleInput-2&quot; placeholder=&quot;Example input placeholder&quot;&gt;</p>
                  <p>&lt;/TFormGroup&gt;</p>
                </pre>
                  &lt;TInput&gt; 사용 예제
                <pre>
                  <p>&lt;TInput label=&quot;Example label&quot; type=&quot;text&quot; classes=&quot;form-control&quot; safeId=&quot;formGroupExampleInput-3&quot; placeholder=&quot;Example input placeholder&quot;/&gt;</p>
                  <p>&lt;TInput horizontal label=&quot;Example label&quot; type=&quot;text&quot; classes=&quot;form-control ml-2&quot; safeId=&quot;formGroupExampleInput-4&quot; placeholder=&quot;Example input placeholder&quot;/&gt;</p>
                </pre>
              </div>

              <div class="contents">
                <div class="sectionTit">
                      <h2> &lt;TFormGroup&gt; </h2>
                      <p> 폼을 그룹핑하기 위한 컴포넌트 입니다.</p>
                      <p> .form-group 클래스를 이용하여 레이아웃 구조에 폼을 추가하며 해당 컴포넌트는 라벨, 컨트롤, 도움말 등을 그룹핑 시킵니다.</p>
                      <p> 필요에 따라 inline 속성을 추가하여 가로로 배치 할 수 있습니다. </p>
                      <p> &lt;TInput&gt;, &lt;TCheckBox&gt;, &lt;TSelect&gt;, &lt;TTextarea&gt; 등의 폼 컴포넌트에 내장되어 폼 요소들을 그룹핑 시킵니다. </p>
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
                                  <td>wrapperClasses</td>
                                  <td>String</td>
                                  <td></td>
                                  <td>클래스 지정</td>
                              </tr>
                              <tr>
                                  <td>inline</td>
                                  <td>Boolean</td>
                                  <td>false</td>
                                  <td>가로 배치 여부</td>
                              </tr>
                          </tbody>
                      </table>
                  </section>
              </div>
          </section>

          <section class="preview">
              <h2>Row, Column</h2>
              <p> 그리드 클래스 &lt;TRow&gt;,  &lt;TCol&gt;을 사용하여 더 복잡한 구조의 폼 양식을 구현 할 수 있습니다. </p>
              <div class="example">
                <TForm>
                  <TRow>
                    <TCol lg="8">
                      <TInput class="mb-0" type="text" classes="form-control" placeholder="이름"/>
                    </TCol>
                    <TCol lg="4">
                      <TInput class="mb-0" type="text" classes="form-control" placeholder="성"/>
                    </TCol>
                  </TRow>
                </TForm>
              </div>
              <div class="codeArea">
                <pre>
                  <p>&lt;TForm&gt;</p>
                  <p>&nbsp; &lt;TRow&gt;</p>
                  <p>&nbsp; &nbsp; &lt;TCol sm="8" &gt;</p>
                  <p>&nbsp; &nbsp; &nbsp; &lt;TInput class="mb-0" type=&quot;text&quot; classes=&quot;form-control&quot; placeholder=&quot;이름&quot;/&gt;</p>
                  <p>&nbsp; &nbsp; &lt;/TCol&gt;</p>
                  <p>&nbsp; &nbsp; &lt;TCol sm="4"&gt;</p>
                  <p>&nbsp; &nbsp; &nbsp; &lt;TInput class="mb-0" type=&quot;text&quot; classes=&quot;form-control&quot; placeholder=&quot;성&quot;/&gt;</p>
                  <p>&nbsp; &nbsp; &lt;/TCol&gt;</p>
                  <p>&nbsp; &lt;/TRow&gt;</p>
                  <p>&lt;/TForm&gt;</p>
                </pre>
              </div>

              <div class="contents">
                <div class="sectionTit">
                      <h2>&lt;TRow&gt;</h2>
                      <p> 레이아웃 구성 시 행 배치 컴포넌트입니다. </p>
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
                              <td>rootTag</td>
                              <td>String</td>
                              <td>'div'</td>
                              <td>row의 태그 지정</td>
                          </tr>
                          <tr>
                              <td>form</td>
                              <td>Boolean</td>
                              <td>false</td>
                              <td>
                                <p>form 내부에서 사용시 적용.</p>
                                <p>.row 대신 .form-row 클래스를 사용하게 됩니다</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                </section>
              </div>

              <div class="contents">
                <div class="sectionTit">
                      <h2>&lt;TCol&gt;</h2>
                      <p> 레이아웃 구성 시 열 배치 컴포넌트입니다. </p>
                      <p> &lt;TCol&gt; 의 옵션으로 부트스트랩 그리드 시스템의 칼럼 클래스를 적용 할 수 있습니다. </p>
                      <a href="https://getbootstrap.com/docs/4.0/utilities/spacing/"> bootstrap spacing 문서 바로가기 </a>
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
                              <td>rootTag</td>
                              <td>String</td>
                              <td>'div'</td>
                              <td>col의 태그 지정</td>
                          </tr>
                          <tr>
                              <td>col</td>
                              <td>Boolean, String, Number, Object</td>
                              <td></td>
                              <td>
                                <p>부트스트랩 그리드 시스템의 클래스 접두사 적용</p>
                                <p>col, xs, sm, md, lg, xl, xxl 적용 가능합니다.</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                </section>
              </div>
          </section>
          
  </div>
</template>

<script>
import TFormGroup from '@/components/form/TFormGroup.vue';
import TInput from '@/components/form/input/TInput.vue';
import TCheckBox from '@/components/form/checkbox/TCheckBox.vue';
import TTextarea from '@/components/form/textarea/TTextarea.vue';
import TSelect from '@/components/form/select/TSelect.vue';
import TForm from '@/components/form/TForm.vue';
import TButton from '@/components/button/TButton.vue';
import TRow from '@/components/grid/TRow.vue';
import TCol from '@/components/grid/TCol.vue';


export default {
  components: {
    TFormGroup,
    TInput,
    TCheckBox,
    TButton,
    TSelect,
    TTextarea,
    TForm,
    TRow,
    TCol
  },
  data() {
    return {
      optionList: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'
      ],
      optionList2: [
        'Option 1', 'Option 2', 'Option 3',
        { 
          value   : 'some value4', 
          label   : 'Selected option4 with selected',
          selected: true
        },
        { 
          value   : 'some value5', 
          label   : 'Selected option5 with disabled',
          disabled: true
        }
      ]
    };
  },
  methods: {
    changeEvt: function(evt) {
      alert('checked: '+ evt.target.checked);
    },
    selectEvt: function(evt) {
      alert('selected: '+ evt.target.selectedIndex);      
    }
  }

};
</script>

<style>

</style>