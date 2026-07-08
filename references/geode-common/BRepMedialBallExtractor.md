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

# class BRepMedialBallExtractor


```cpp
Inherits from ModelMedialBallExtractor
```



## Records

Options



## Functions

### BRepMedialBallExtractor

```cpp
public void BRepMedialBallExtractor(const BRepMedialBallExtractor & )
```


### BRepMedialBallExtractor

```cpp
public void BRepMedialBallExtractor(BRepMedialBallExtractor && )
```


### operator=

```cpp
public BRepMedialBallExtractor & operator=(const BRepMedialBallExtractor & )
```


### operator=

```cpp
public BRepMedialBallExtractor & operator=(BRepMedialBallExtractor && )
```


### BRepMedialBallExtractor

```cpp
public void BRepMedialBallExtractor(const BRep & brep, Options & options)
```


### ~BRepMedialBallExtractor

```cpp
public void ~BRepMedialBallExtractor()
```


### compute_all_blocks

```cpp
public absl::linked_hash_map<uuid, std::unique_ptr<PointSet3D>> compute_all_blocks()
```


### compute_block

```cpp
public std::unique_ptr<PointSet3D> compute_block(const uuid & block_id)
```




