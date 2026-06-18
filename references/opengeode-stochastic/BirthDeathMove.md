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

# class BirthDeathMove


```cpp
Inherits from Move<ObjectType>
```



## Functions

### BirthDeathMove

```cpp
public void BirthDeathMove<ObjectType>(const ObjectSetSampler<ObjectType> & sampler, double probability, double birth_ratio)
```


### propose_move

```cpp
public MoveResult<ObjectType> propose_move(const ObjectSet<ObjectType> & set, RandomEngine & engine)
```


### initialize_probability

```cpp
public void initialize_probability(double probability)
```


### string

```cpp
public std::string string()
```




