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

# class SingleSurfaceFromVertices


## Functions

### SingleSurfaceFromVertices

```cpp
public void SingleSurfaceFromVertices(const SingleSurfaceFromVertices & )
```


### operator=

```cpp
public SingleSurfaceFromVertices & operator=(const SingleSurfaceFromVertices & )
```


### SingleSurfaceFromVertices

```cpp
public void SingleSurfaceFromVertices()
```


### SingleSurfaceFromVertices

```cpp
public void SingleSurfaceFromVertices(SingleSurfaceFromVertices && other)
```


### operator=

```cpp
public SingleSurfaceFromVertices & operator=(SingleSurfaceFromVertices && other)
```


### ~SingleSurfaceFromVertices

```cpp
public void ~SingleSurfaceFromVertices()
```


### add_data_points

```cpp
public void add_data_points(const PointSet3D & data_points, double min_distance, std::string_view weight_attribute_name)
```


### add_data_curve

```cpp
public void add_data_curve(const EdgedCurve3D & data_curve, double min_distance, std::string_view weight_attribute_name)
```


### add_outline

```cpp
public void add_outline(const EdgedCurve3D & outline, std::string_view weight_attribute_name)
```


### build

```cpp
public std::unique_ptr<TriangulatedSurface3D> build(const ImplicitationParameters & computation_parameters)
```


### build

```cpp
public std::unique_ptr<TriangulatedSurface3D> build(double expected_mesh_size)
```




