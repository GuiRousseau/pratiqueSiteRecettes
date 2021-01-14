import CreateCards  from "./CreateCards";


export default function FiltrerRecettes(searchTags, tagsRecettes, recipes){
    var names = new Set([]);
    searchTags.forEach(function(entry) {
      Object.keys(tagsRecettes).forEach(function(entry2) {
        var tab = tagsRecettes[entry2];
        if(tab.includes(entry.toLowerCase()) || String(entry2.toLowerCase()).includes(String(entry.toLowerCase()))){
          names.add(entry2);
        }
      })
    })
    if(names.size === 0){
      names = Object.keys(tagsRecettes);
    }
    return CreateCards(Array.from(names), recipes);
}
