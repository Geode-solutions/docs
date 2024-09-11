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

# class PointSetInspector


```cpp
Inherits from AddInspectors<PointSet<2U>, PointSetColocation<2U> >
```



# class PointSetInspector


```cpp
Inherits from AddInspectors<PointSet<3U>, PointSetColocation<3U> >
```



# class PointSetInspector


 Class for inspecting a PointSet**extends** 



```cpp
Inherits from AddInspectors<PointSet<dimension>, PointSetColocation<dimension> >
```



## Functions

### PointSetInspector

```cpp
public void PointSetInspector<dimension>(const PointSetInspector<dimension> & )
```


### operator=

```cpp
public PointSetInspector<dimension> & operator=(const PointSetInspector<dimension> & )
```


### PointSetInspector

```cpp
public void PointSetInspector<dimension>(const PointSet<dimension> & mesh)
```


### inspect_point_set

```cpp
public PointSetInspectionResult inspect_point_set()
```




