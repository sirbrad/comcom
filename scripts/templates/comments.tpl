<li class="comment__item <%= classname %>">
	<a href="http://github.com/<%= url %>" class="img" title="http://github.com/<%= url %>">
		<i class="i--loader"></i>
		<img src="<%= useravatar %>" class="comment__avatar" alt="<%= username %>'s avatar" width="80" />
	</a>
	<div class="bod">			
		<a href="http://github.com/<%= url %>" class="comment__id" title="<%= username %>"><%= username %></a>
		<time datetime="<%= date %>" class="comment__date" pubdate=""><%= date %></time>
		<%= content %>
	</div>
</li>