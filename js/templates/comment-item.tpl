<li class="comment_list__item">
  <a href="<%= profile_url %>" class="comment-list__img">
    <img src="<%= avatar_url %>" alt="<%= author %>'s avatar" />
  </a>
  <div class="comment-list__body">
    <header class="comment-list__head">
      <a href="<%= profile_url %>" class="comment-list__author">
        <strong><%= author %></strong>
      </a>
      <time class="comment-list__date"
        datetime="<%= date.numeric %>" pubdate="" data-date="<%= date.formatted %>">
        <%= date.from_now %>
      </time>
    </header>
    <%= content %>
  </div>
</li>
