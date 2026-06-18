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

# class Move


## Functions

### Move

```cpp
public void Move<ObjectType>(const Move<ObjectType> & )
```


### Move

```cpp
public void Move<ObjectType>(Move<ObjectType> && )
```


### operator=

```cpp
public Move<ObjectType> & operator=(const Move<ObjectType> & )
```


### operator=

```cpp
public Move<ObjectType> & operator=(Move<ObjectType> && )
```


### Move

```cpp
public void Move<ObjectType>()
```


### Move

```cpp
public void Move<ObjectType>(const ObjectSetSampler<ObjectType> & sampler, double proportion_weight)
```


### propose_move

```cpp
public MoveResult<ObjectType> propose_move(const ObjectSet<ObjectType> & set, RandomEngine & engine)
```

### ~Move

```cpp
public void ~Move<ObjectType>()
```


### proportion_weight

```cpp
public double proportion_weight()
```


### initialize_probability

```cpp
public void initialize_probability(double probability)
```


### draw_a_free_sample_id

```cpp
protected std::optional<geode::index_t> draw_a_free_sample_id(const ObjectSet<ObjectType> & set, RandomEngine & engine)
```


### sampler

```cpp
protected const ObjectSetSampler<ObjectType> & sampler()
```


### string

```cpp
public std::string string()
```



