//function(doc) {
//return projects in my db
//loop over docs & call function
//  if (doc._id.substr(0, 8) === "project:") {
//    emit(doc._id.substr(8), {
//    	"name": doc.name,
//    	"tags": doc.tags,
//    	"comments": doc.comments
//    });
//};

function(doc)
{
	emit((new Date(doc.creation_date)).getTime(),doc);
}
