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


## Records

Options



## Functions

### BackgroundBRepInserter

```cpp
public void BackgroundBRepInserter(const BackgroundBRepInserter & )
```


### operator=

```cpp
public BackgroundBRepInserter & operator=(const BackgroundBRepInserter & )
```


### BackgroundBRepInserter

```cpp
public void BackgroundBRepInserter(BackgroundBRepInserter && )
```


### operator=

```cpp
public BackgroundBRepInserter & operator=(BackgroundBRepInserter && )
```


### BackgroundBRepInserter

```cpp
public void BackgroundBRepInserter(ModifiableObject background_brep, BackgroundBRepBuilder & background_builder, BRepBuilder & builder, const Options & options)
```


### ~BackgroundBRepInserter

```cpp
public void ~BackgroundBRepInserter()
```


### insert_curve

```cpp
public linked_hash_map insert_curve(const EdgedCurve3D & mesh)
```


### insert_curve_edges

```cpp
public linked_hash_map insert_curve_edges(const EdgedCurve3D & mesh, Span edges)
```


### insert_surface

```cpp
public linked_hash_map insert_surface(const TriangulatedSurface3D & mesh)
```


### insert_surface_triangles

```cpp
public linked_hash_map insert_surface_triangles(const TriangulatedSurface3D & mesh, Span triangles)
```


### insert_scalar_function_isovalues

```cpp
public linked_hash_map insert_scalar_function_isovalues(basic_string_view function_name, Span isovalues)
```




