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

# class ExtractedTriangulatedSurfaceInfoBuilder


```cpp
Inherits from ExtractedMeshInfoBuilder<TriangulatedSurface3D>
```



## Functions

### ExtractedTriangulatedSurfaceInfoBuilder

```cpp
public void ExtractedTriangulatedSurfaceInfoBuilder(ExtractedTriangulatedSurfaceInfo & extracted_mesh)
```


### reset_all_attributes

```cpp
public void reset_all_attributes()
```


### add_mesh

```cpp
public void add_mesh(const BackgroundSolid & background_solid, const ExtractedTriangulatedSurfaceInfo & extracted_mesh)
```


### update_mesh

```cpp
public void update_mesh(std::unique_ptr<TriangulatedSurface3D> && mesh)
```


### stitch_patches

```cpp
public void stitch_patches(const MeshPolygon & macro_triangle_id)
```


### simplify

```cpp
public void simplify()
```




