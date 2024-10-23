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

# class PointSetMerger


```cpp
Inherits from VertexMerger<PointSet<3U> >
```



# class PointSetMerger


```cpp
Inherits from VertexMerger<PointSet<2U> >
```



# class PointSetMerger


```cpp
Inherits from VertexMerger<PointSet<dimension> >
```



## Functions

### PointSetMerger

```cpp
public void PointSetMerger<dimension>(absl::Span<const std::reference_wrapper<const PointSet<dimension> > > pointsets, double epsilon)
```


### PointSetMerger

```cpp
public void PointSetMerger<dimension>(PointSetMerger<dimension> && )
```


### ~PointSetMerger

```cpp
public void ~PointSetMerger<dimension>()
```


### merge

```cpp
public std::unique_ptr<PointSet<dimension> > merge()
```




