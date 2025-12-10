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

# class BRepRayTracing


## Functions

### BRepRayTracing

```cpp
public void BRepRayTracing(const BRep & brep)
```


### ~BRepRayTracing

```cpp
public void ~BRepRayTracing()
```


### find_intersections_with_boundaries

```cpp
public flat_hash_map find_intersections_with_boundaries(const InfiniteLine3D & infinite_line, const Block3D & block)
```


### is_point_inside_block

```cpp
public bool is_point_inside_block(const Point3D & point, const Block3D & block)
```


### block_containing_point

```cpp
public optional block_containing_point(const Point3D & point)
```




