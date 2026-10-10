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

# class VTUOutputImpl


```cpp
Inherits from VTKMeshOutputImpl<Mesh, 3>
```



## Functions

### VTUOutputImpl

```cpp
protected void VTUOutputImpl<Mesh>(std::string_view filename, const Mesh<3> & solid)
```


### nb_additional_polygons

```cpp
protected index_t nb_additional_polygons()
```


### additional_polygon_vertices

```cpp
protected absl::Span<const index_t> additional_polygon_vertices(index_t )
```


### cell_attribute_manager

```cpp
protected const AttributeManager & cell_attribute_manager()
```




