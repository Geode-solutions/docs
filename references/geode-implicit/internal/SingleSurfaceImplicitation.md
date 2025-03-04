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

# class SingleSurfaceImplicitation


## Functions

### SingleSurfaceImplicitation

```cpp
public void SingleSurfaceImplicitation()
```


### SingleSurfaceImplicitation

```cpp
public void SingleSurfaceImplicitation(SingleSurfaceImplicitation && other)
```


### ~SingleSurfaceImplicitation

```cpp
public void ~SingleSurfaceImplicitation()
```


### add_data_points

```cpp
public void add_data_points(const PointSet3D & data_points, double min_distance, double weight)
```


### add_data_curve

```cpp
public void add_data_curve(const EdgedCurve3D & data_curve, double min_distance, double weight)
```


### add_data_surface

```cpp
public void add_data_surface(const SurfaceMesh3D & data_surface, double min_distance, double weight)
```


### add_data_point

```cpp
public void add_data_point(const Point3D & data_point, double weight)
```


### data_manager

```cpp
public const DataPointsManager3D & data_manager()
```


### build

```cpp
public void build(const BoundingBox3D & computation_bbox, const ImplicitationParameters & computation_parameters)
```


### resulting_grid

```cpp
public const ComputationGrid3D & resulting_grid()
```




