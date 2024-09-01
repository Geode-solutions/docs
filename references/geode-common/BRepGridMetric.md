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

# class BRepGridMetric


 BRep grid metric implementation



```cpp
Inherits from GridMetric<3>
```



## Functions

### BRepGridMetric

```cpp
public void BRepGridMetric(const BRep & brep, const Grid3D & grid, double default_metric)
```


### ~BRepGridMetric

```cpp
public void ~BRepGridMetric()
```


### paint_block

```cpp
public void paint_block(const Block3D & block, double metric)
```




