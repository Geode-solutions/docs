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

# class AdvancedModelMeshModifiers


## Members

```cpp
protected static const auto dimension

```



## Records

Entry



## Functions

### AdvancedModelMeshModifiers

```cpp
protected void AdvancedModelMeshModifiers<Model>(const Model & model, ModelBuilder & builder)
```


### mutex

```cpp
protected absl::Mutex & mutex()
```


### clean_line_and_surface_modifiers

```cpp
protected void clean_line_and_surface_modifiers()
```


 Clean the existing line and surface modifiers and update the model unique vertices accordingly.

### update_unique_vertices

```cpp
protected void update_unique_vertices(const ComponentID & component_id, absl::Span<const index_t> old2new)
```


### AdvancedModelMeshModifiers

```cpp
public void AdvancedModelMeshModifiers<Model>(const Model & model, ModelBuilder & builder, ModelGeometricModifierKey )
```


### line_modifier

```cpp
public EdgedCurveModifier<dimension> & line_modifier(const Line<dimension> & line)
```


### reset_line_modifier

```cpp
public void reset_line_modifier(const Line<dimension> & line)
```


### surface_modifier

```cpp
public TriangulatedSurfaceModifier<dimension> & surface_modifier(const Surface<dimension> & surface)
```


### reset_surface_modifier

```cpp
public void reset_surface_modifier(const Surface<dimension> & surface)
```




