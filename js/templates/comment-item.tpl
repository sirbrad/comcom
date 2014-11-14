<li class="comment_list__item">
  <a href="<%= profile_url %>" class="comment-list__img">
    <img src="<%= avatar_url %>" alt="<%= author %>'s avatar" />
  </a>
  <div class="comment-list__body">
    <header class="comment-list__head">
      <a href="#" class="comment-list__author">
        <strong><%= author %></strong>
      </a>
      <time class="comment-list__date" datetime="2012-08-17" pubdate="">
        <small><%= date %></small>
      </time>
    </header>
    <%= content %>
  </div>
</li>
