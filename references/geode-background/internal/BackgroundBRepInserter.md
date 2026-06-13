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


### BackgroundBRepInserter

```cpp
public void BackgroundBRepInserter(BackgroundBRepInserter && )
```


### operator=

```cpp
public BackgroundBRepInserter & operator=(const BackgroundBRepInserter & )
```


### operator=

```cpp
public BackgroundBRepInserter & operator=(BackgroundBRepInserter && )
```


### BackgroundBRepInserter

```cpp
public void BackgroundBRepInserter(ModifiableBackgroundBRep background_brep, BackgroundBRepBuilder & background_builder, BRepBuilder & builder, const Options & options)
```


### ~BackgroundBRepInserter

```cpp
public void ~BackgroundBRepInserter()
```


### insert_curve

```cpp
public BlockElementInsertionInfo insert_curve(const EdgedCurve3D & mesh)
```


### insert_curve_edges

```cpp
public BlockElementInsertionInfo insert_curve_edges(const EdgedCurve3D & mesh, absl::Span<const index_t> edges)
```


### insert_surface

```cpp
public BlockElementInsertionInfo insert_surface(const TriangulatedSurface3D & mesh)
```


### insert_surface_triangles

```cpp
public BlockElementInsertionInfo insert_surface_triangles(const TriangulatedSurface3D & mesh, absl::Span<const index_t> triangles)
```


### insert_scalar_function_isovalues

```cpp
public absl::linked_hash_map<uuid, std::vector<MeshPolygon>> insert_scalar_function_isovalues(std::string_view function_name, absl::Span<const double> isovalues)
```




