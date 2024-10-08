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

# namespace geode



## Namespaces

* [internal](internal/index.md)


## Records

* [BackgroundBRepLibrary](BackgroundBRepLibrary.md)
* [BackgroundCommonLibrary](BackgroundCommonLibrary.md)
* [BackgroundSolidLibrary](BackgroundSolidLibrary.md)
* [BackgroundSurfaceLibrary](BackgroundSurfaceLibrary.md)
* [MeshElement](MeshElement.md)
* [ModifiedTetrahedron](ModifiedTetrahedron.md)
* [Modifier](Modifier.md)
* [uuid](uuid.md)


## Functions

### add_macro_info

```cpp
void add_macro_info(geode::VariableAttribute<std::vector<MacroInfo> > & attribute, const MacroInfo & macro_info, index_t background_mesh_element_id)
```


### remove_macro_info

```cpp
void remove_macro_info(geode::VariableAttribute<std::vector<MacroInfo> > & attribute, const MacroInfo & macro_info, index_t background_mesh_element_id)
```




