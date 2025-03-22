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

# class BackgroundBRepInserter


## Functions

### BackgroundBRepInserter

```cpp
public void BackgroundBRepInserter(ModifiableObject background_brep, BackgroundBRepBuilder & builder)
```


### ~BackgroundBRepInserter

```cpp
public void ~BackgroundBRepInserter()
```


### insert_curve

```cpp
public flat_hash_map insert_curve(const EdgedCurve3D & mesh)
```


### insert_curve_edges

```cpp
public flat_hash_map insert_curve_edges(const EdgedCurve3D & mesh, Span edges_ids)
```


### insert_scalar_function_isovalues

```cpp
public flat_hash_map insert_scalar_function_isovalues(basic_string_view function_name, Span isovalues)
```




