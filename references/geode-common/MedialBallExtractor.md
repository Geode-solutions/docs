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

# class MedialBallExtractor


## Functions

### MedialBallExtractor

```cpp
public void MedialBallExtractor(const MedialBallExtractor & )
```


### operator=

```cpp
public MedialBallExtractor & operator=(const MedialBallExtractor & )
```


### MedialBallExtractor

```cpp
public void MedialBallExtractor(MedialBallExtractor && )
```


### operator=

```cpp
public MedialBallExtractor & operator=(MedialBallExtractor && )
```


### MedialBallExtractor

```cpp
public void MedialBallExtractor(const BRep & brep, double min_angle)
```


### ~MedialBallExtractor

```cpp
public void ~MedialBallExtractor()
```


### compute_all_blocks

```cpp
public linked_hash_map compute_all_blocks()
```


### compute_block

```cpp
public unique_ptr compute_block(const uuid & block_id)
```




