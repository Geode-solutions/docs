<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class GMSHPoint


```cpp
Inherits from GMSHElement
```



## Functions

### GMSHPoint

```cpp
public void GMSHPoint(geode::index_t physical_entity_id, geode::index_t elementary_entity_id, Span vertex_ids)
```


### add_element

```cpp
public void add_element(geode::BRep & brep, GmshId2Uuids & id_map)
```




