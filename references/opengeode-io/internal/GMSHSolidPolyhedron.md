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

# class GMSHSolidPolyhedron


```cpp
Inherits from GMSHElement
```



## Functions

### GMSHSolidPolyhedron

```cpp
public void GMSHSolidPolyhedron(geode::index_t physical_entity_id, geode::index_t elementary_entity_id, geode::index_t nb_vertices, Span vertex_ids)
```


### create_gmsh_polyhedron

```cpp
public geode::index_t create_gmsh_polyhedron(geode::BRepBuilder & builder, const geode::uuid & block_uuid, const std::vector<geode::index_t> & v_ids)
```

### add_element

```cpp
public void add_element(geode::BRep & brep, GmshId2Uuids & id_map)
```




