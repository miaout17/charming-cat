$(".item").each( function() {
	var item = $(this); 
	var name = item.children(".name").text(); 
	name = $.trim(name); 
	if (!name)
		return; 
	var url = "http://progenitor-softworks.com/ew/index.php?title=" + name.replace(" ", "_"); 
	var link = '<a href="' + url + '" class="lhp">[wiki]</a>';
	item.children(".functions").append(link); 
}); 
