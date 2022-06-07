import { useState } from "react";
import React from "react";
import "./Main.css";

function Main(props) {
  return (
    <>
      <nav>
        <div class="gohome">
          <a href="/main/main.html">
            <div class="logo_box">
              <img src="images/instagram.png" alt="instagram" />
              <div class="border"></div>
              <span class="logotext">Westagram</span>
            </div>
          </a>
        </div>
        <div class="search">
          <input type="text" placeholder="검색" />
        </div>
        <div class="social_icons">
          <div class="compass icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="나침반"
            />
          </div>
          <div class="like icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="좋아요"
            />
          </div>
          <div class="profile icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="프로필"
            />
          </div>
        </div>
      </nav>

      <main>
        <div class="feeds">
          <article class="stories">
            <div class="story1 story"></div>
            <div class="story2 story"></div>
            <div class="story3 story"></div>
            <div class="story4 story"></div>
            <div class="story5 story"></div>
            <div class="story6 story"></div>
          </article>

          <article class="article1">
            <div class="user_profile">
              <div class="user_photo">
                <img src="images/슬기.jpg" alt="" />
                <div class="user_id">intarrr</div>
              </div>
              <div class="seemore_btn">
                <img src="../images/option.png" alt="" />
              </div>
            </div>
            <div class="feed_image">
              <img src="images/profile1.jpg" alt="pizza" />
            </div>
            <section class="feed_contents">
              <div class="feed_description">
                <div class="response_icons">
                  <div class="icons_left">
                    <button class="heartbtn"></button>
                    <button class="commentbtn"></button>
                    <button class="directmessagebtn"></button>
                  </div>
                  <div class="icons_right">
                    <i class="fa-regular fa-bookmark"></i>
                  </div>
                </div>
                <div id="likes_figure"></div>
                <div class="user_comment">
                  <span class="my_id">intarrr</span>
                  <span class="my_comment">
                    집에 늦게 가는 것만이 능사가 아닙니다.
                  </span>
                </div>
                <div class="registerd_reply">
                  <span class="friends_id">seulgi</span>
                  <span class="friends_comment">나도 먹고싶다!</span>
                  <button class="reply_like">
                    <i class="fa-regular fa-heart" id="small"></i>
                  </button>
                </div>
                <div class="upload_date">2일 전</div>
              </div>
            </section>

            <div class="reply">
              <ul id="replylist"></ul>
              <form action="">
                <input
                  class="replybox"
                  id="replysubmit"
                  type="text"
                  placeholder=" 댓글 달기..."
                />
                <button
                  onclick="registerReply(); return false;"
                  class="submitbtn"
                >
                  게시
                </button>
              </form>
            </div>
          </article>

          <article class="article2"></article>
        </div>

        <div class="main-right">
          <div class="user_self">
            <div class="user_self_photo">
              <img src="images/wedding.jpg" alt="" />
            </div>
            <div class="user_self_info">
              <p class="user_self_id">intarrr</p>
              <p class="user_self_description">축구도사</p>
            </div>
          </div>

          <div class="story_collection">
            <div class="story_inner">
              <span>스토리</span>
              <button class="loadallbtn">모두 보기</button>
            </div>
            <div class="story_list">
              <div class="storybox">
                <div class="story11 story"></div>
                <div class="story_id">
                  <p>사용자1</p>
                  <span>1분전</span>
                </div>
              </div>
              <div class="storybox">
                <div class="story12 story"></div>
                <div class="story_id">
                  <p>사용자2</p>
                  <span>2분전</span>
                </div>
              </div>
              <div class="storybox">
                <div class="story13 story"></div>
                <div class="story_id">
                  <p>사용자3</p>
                  <span>4분전</span>
                </div>
              </div>
              <div class="storybox">
                <div class="story14 story"></div>
                <div class="story_id">
                  <p>사용자4</p>
                  <span>7분전</span>
                </div>
              </div>
              <div class="storybox">
                <div class="story15 story"></div>
                <div class="story_id">
                  <p>사용자5</p>
                  <span>17분전</span>
                </div>
              </div>
              <div class="storybox">
                <div class="story16 story"></div>
                <div class="story_id">
                  <p>사용자6</p>
                  <span>2시간 전</span>
                </div>
              </div>
              <div class="storybox">
                <div class="story17 story"></div>
                <div class="story_id">
                  <p>사용자7</p>
                  <span>5시간 전</span>
                </div>
              </div>
            </div>
          </div>

          <div class="recommendation">
            <div class="recommendation_inner">
              <span>회원님을 위한 추천</span>
              <button class="loadallbtn">모두 보기</button>
            </div>
            <section class="recommend_list">
              <div class="friends_list">
                <div class="friend1 story"></div>
                <p>pizzamania123</p>
                <button>팔로우</button>
              </div>
              <div class="friends_list">
                <div class="friend2 story"></div>
                <p>bibimbab77</p>
                <button>팔로우</button>
              </div>
              <div class="friends_list">
                <div class="friend2 story"></div>
                <p>gucksumari42</p>
                <button>팔로우</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
