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

# class BRepStitching


## Functions

### BRepStitching

```cpp
public void BRepStitching(const BRepStitching & )
```


### BRepStitching

```cpp
public void BRepStitching(BRepStitching && )
```


### operator=

```cpp
public BRepStitching & operator=(const BRepStitching & )
```


### operator=

```cpp
public BRepStitching & operator=(BRepStitching && )
```


### BRepStitching

```cpp
public void BRepStitching(const BRep & brep, BRepBuilder & builder, double threshold)
```


### ~BRepStitching

```cpp
public void ~BRepStitching()
```


### process_all_vertices

```cpp
public void process_all_vertices()
```


### process_points

```cpp
public void process_points(absl::Span<const Point3D> points)
```


### process_free_borders

```cpp
public void process_free_borders()
```




