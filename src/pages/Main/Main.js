import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  return (
    <React.Fragment className="main">
      <nav className="upperNav">
        <div className="westaWrap">
          <img
            id="instagramLogo"
            src="/images/instagram.png"
            alt="인스타그램 로고"
          />
          <div className="westagram">Westagram</div>
        </div>
        <input className="search" type="text" placeholder="검색" />
        <div>
          <button className="upperIconsButton">
            <img
              className="upperIcons"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색"
            />
          </button>
          <button className="upperIconsButton">
            <img
              className="upperIcons"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트"
            />
          </button>
          <button className="upperIconsButton" id="dropButton">
            <img
              className="upperIcons"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="프로필"
            />
          </button>
        </div>
        <div id="dropBox">
          <a href="#none">
            <img src=".images/save-instagram.png" alt="프로필" />
            프로필
          </a>
          <a href="#none">
            <img src="/images/save-instagram.png" alt="저장" />
            저장됨
          </a>
          <a id="setting" href="#none">
            <img src="/images/save-instagram.png" alt="설정" />
            설정
          </a>
          <a id="log_out" href="#none">
            로그아웃
          </a>
        </div>
      </nav>
      <div className="mainWrap">
        <div className="leftSection">
          <div className="leftSectionArticle">
            <nav className="profileNav">
              <span className="profileNavInner1">
                <img
                  className="profileImg"
                  src="/images/user.png"
                  alt="프로필"
                />
                <a href="#none" className="profileName">
                  canon_mj
                </a>
              </span>
              <span className="profileNavInner2">...</span>
            </nav>
            <img
              className="uploadImg"
              src="/images/chad-montano-MqT0asuoIcU-unsplash.jpg"
              alt="피자"
            />
            <div className="profileIconWrap">
              <button className="profileHeart">
                <img
                  className="profileHeart"
                  src="/images/heart.png"
                  alt="하트"
                />
              </button>
              <button className="profileComment">
                <img
                  className="profileComment"
                  src="/images/speech-bubble.png"
                  alt="댓글"
                />
              </button>
              <button className="profileUproad">
                <img
                  className="profileUproad"
                  src="/images/upload.png"
                  alt="업로드"
                />
              </button>
              <button className="profileSave">
                <img
                  className="profileSave"
                  src="/images/save-instagram.png"
                  alt="저장"
                />
              </button>
            </div>
            <div className="likeWrap">
              <a href="#none" className="likeId">
                aineworld
              </a>
              님<span className="likeCount">외 10명</span>이 좋아합니다.
            </div>
            <div className="newComment">
              {/* <div class="commentTotalWrap">
                    <a href="#" class="commentId">neceosecius</a>
                    <span class="comment">댓글 예시</span>              
                    <button class="commentLikeButton"><img class="commentLike" src="img/heart.png" alt="하트"/><button>
                    <button class="deleteComment">x</button>
                  </div> */}
            </div>
            <div className="commentTime">42분 전</div>
            <div className="addcommentWrap">
              <input
                className="addComment"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="addCommentButton">게시</button>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="userProfileWrap">
            <img
              className="userProfileImg"
              src="/images/account.png"
              alt="프로필"
            />
            <div className="userIdWrap">
              <div className="userId">wecode_bootcamp</div>
              <div className="userCompany">WeCode | 위코드</div>
            </div>
          </div>
          <div className="storyTotalWrap">
            <div className="storyWrap">
              <span className="rightSectionTitle">스토리</span>
              <button className="seeAll">모두 보기</button>
            </div>
            <ul>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/karl-magnuson-85J99sGggnw-unsplash.jpg"
                  alt="sunset"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    _yum_s
                  </a>
                  <div className="storyTime">16분 전</div>
                </div>
              </li>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/samsung-uk-no101tswX7I-unsplash.jpg"
                  alt="대화하는 두 여성"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    drink_eat_drink
                  </a>
                  <div className="storyTime">3시간 전</div>
                </div>
              </li>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/karl-magnuson-85J99sGggnw-unsplash.jpg"
                  alt="sunset"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    hyukyc
                  </a>
                  <div className="storyTime">20시간 전</div>
                </div>
              </li>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/samsung-uk-no101tswX7I-unsplash.jpg"
                  alt="대화하는 두 여성"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    jminkeek
                  </a>
                  <div className="storyTime">22시간 전</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="recommendTotalWrap">
            <div className="recommendWrap">
              <span className="rightSectionTitle">회원님을 위한 추천</span>
              <button className="seeAll">모두 보기</button>
            </div>
            <ul>
              <li className="recommendProfileWrap">
                <div className="recommendImgWrap">
                  <img
                    className="recommendProfileImg"
                    src="/images/samsung-uk-no101tswX7I-unsplash.jpg"
                    alt="대화하는 두 여성"
                  />
                  <div className="recommendIdWrap">
                    <a href="#none" className="recommendId">
                      joaaaaahye
                    </a>
                    <div className="recommendFollower">
                      _legend_a님 외 2명이...
                    </div>
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </li>
              <li className="recommendProfileWrap">
                <div className="recommendImgWrap">
                  <img
                    className="recommendProfileImg"
                    src="/images/karl-magnuson-85J99sGggnw-unsplash.jpg"
                    alt="sunset"
                  />
                  <div className="recommendIdWrap">
                    <a href="#none">rampart81</a>
                    <div className="recommendFollower">
                      ringo.in.seoul님 외 12...
                    </div>
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </li>
              <li className="recommendProfileWrap">
                <div className="recommendImgWrap">
                  <img
                    className="recommendProfileImg"
                    src="/images/samsung-uk-no101tswX7I-unsplash.jpg"
                    alt="대화하는 두 여성"
                  />
                  <div className="recommendIdWrap">
                    <a href="#none">shawnjjoo</a>
                    <div className="recommendFollower">
                      jimmylee1220님 외 1...
                    </div>
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </li>
            </ul>
          </div>
          <p className="etcWrap">
            <a className="etc" href="#">
              instagram 정보
            </a>
            ・
            <a className="etc" href="#">
              지원
            </a>
            ・
            <a className="etc" href="#">
              홍보 센터
            </a>
            ・
            <a className="etc" href="#">
              API
            </a>
            <a className="etc" href="#">
              채용
            </a>
            ・
            <a className="etc" href="#">
              정보
            </a>
            ・
            <a className="etc" href="#">
              개인정보처리방침
            </a>
            ・
            <a className="etc" href="#">
              약관
            </a>
            ・
            <a className="etc" href="#">
              디렉터리
            </a>
            ・
            <a className="etc" href="#">
              프로필
            </a>
            ・
            <a className="etc" href="#">
              해시태그
            </a>
            ・
            <a className="etc" href="#">
              언어
            </a>
          </p>
          <p className="etc">© 2023 WESTAGRAM</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

// const addButton = document.querySelector(".addCommentButton");

// const newComment = document.querySelector(".newComment");
// const addComment = document.querySelector(".addComment");

// // 게시 버튼 누르면 댓글 추가
// // const newComment = `<span>아이디</span><span>${변수(댓글 내용)}</span>`
// // newCommentList.innerHTML = newComment
// // => getElement로 각각의 span 생성해서 value를 appendChild 등등을 할 필요가 없어짐!
// addButton.addEventListener("click", (event) => {
//   createComment();
// });

// const createComment = () => {
//   if (addComment.value === "") {
//     return;
//   }

//   const commentTotalWrap = document.createElement("div");
//   commentTotalWrap.classNameName = "commentTotalWrap";

//   const commentId = document.createElement("a");
//   commentId.href = "#";
//   commentId.classNameName = "commentId";
//   commentId.innerText = "user Id";
//   commentId.style.marginRight = "8px";

//   const comment = document.createElement("span");
//   comment.classNameName = "comment";
//   comment.innerText = addComment.value;

//   const commentLike = document.createElement("button");
//   const heartImg = document.createElement("img");
//   comment.style.width = heartImg.width;
//   heartImg.classNameName = "commentLike";
//   heartImg.src = "img/heart.png";
//   heartImg.alt = "하트";

//   const deleteComment = document.createElement("button");
//   deleteComment.classNameName = "deleteComment";
//   deleteComment.innerText = "x";

//   commentLike.appendChild(heartImg);

//   commentTotalWrap.appendChild(commentId);
//   commentTotalWrap.appendChild(comment);
//   commentTotalWrap.appendChild(commentLike);
//   commentTotalWrap.appendChild(deleteComment);

//   newComment.appendChild(commentTotalWrap);

//   addComment.value = "";

//   if (addComment.value === "") {
//     addComment.focus();
//   }

//   // x 버튼 누르면 댓글 삭제
//   deleteComment.addEventListener("click", (e) => {
//     commentTotalWrap.remove();
//   });
// };

// addComment.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     return createComment();
//   }
// });

// const profileHeart = document.getElementsByclassNameName("profileHeart")[1];
// // 하트 누르면 빨간 하트
// profileHeart.addEventListener("click", (e) => {
//   profileHeart.src = "img/redheart.png";

//   // if (profileHeart.src === "img/redheart.png") {
//   //   profileHeart.src = "img/heart.png";
//   // }
// });

// const profileSave = document.getElementsByclassNameName("profileSave")[1];
// // 저장 누르면 채워진 아이콘
// profileSave.addEventListener("click", (e) => {
//   profileSave.src = "img/bookmark.png";

//   // if (profileSave.src === "img/bookmark.png") {
//   //   profileSave.src = "img/save-instagram.png";
//   // }
// });

// const dropButton = document.getElementById("dropButton");
// const dropBox = document.getElementById("dropBox");

// // 드롭버튼 클릭하면 dropbox 보이도록
// dropButton.addEventListener("click", (e) => {
//   dropBox.style.display = "block";
// });

// // 전역에 클릭이벤트 주어서 드롭박스 사라지게
// const removeDropBox = document.querySelector(".mainWrap");

// removeDropBox.addEventListener("click", (e) => {
//   dropBox.style.display = "none";
// });
