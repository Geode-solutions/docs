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

# class BoxModelFromTopography


 Builds a BRep from a given set of topography points using implicit modeling.



## Functions

### BoxModelFromTopography

```cpp
public void BoxModelFromTopography(const BoundingBox3D & bounding_box)
```


### BoxModelFromTopography

```cpp
public void BoxModelFromTopography(BoxModelFromTopography && other)
```


### ~BoxModelFromTopography

```cpp
public void ~BoxModelFromTopography()
```


### add_topography

```cpp
public void add_topography(const PointSet3D & data_points, double min_distance, double weight)
```


### build

```cpp
public BRep build(const ImplicitationParameters & computation_parameters)
```




