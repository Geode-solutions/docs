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

# class SurfaceInserter


## Functions

### SurfaceInserter

```cpp
public void SurfaceInserter<Data>(Data & data, const Surface<dimension> & surface)
```


### split_triangle

```cpp
public int split_triangle(int triangles, absl::Span<const Point<dimension> > points)
```


### unique_vertices

```cpp
public Span unique_vertices()
```




