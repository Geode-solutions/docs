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

# class BRepMicroTopologicalClean


## Functions

### BRepMicroTopologicalClean

```cpp
public void BRepMicroTopologicalClean(const BRepMicroTopologicalClean & )
```


### BRepMicroTopologicalClean

```cpp
public void BRepMicroTopologicalClean(BRepMicroTopologicalClean && )
```


### operator=

```cpp
public BRepMicroTopologicalClean & operator=(const BRepMicroTopologicalClean & )
```


### operator=

```cpp
public BRepMicroTopologicalClean & operator=(BRepMicroTopologicalClean && )
```


### BRepMicroTopologicalClean

```cpp
public void BRepMicroTopologicalClean(const BRep & brep, BRepBuilder & builder)
```


### ~BRepMicroTopologicalClean

```cpp
public void ~BRepMicroTopologicalClean()
```


### process

```cpp
public void process()
```




