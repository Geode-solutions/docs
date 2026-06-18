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

# class SimulationRunner


## Functions

### SimulationRunner

```cpp
public void SimulationRunner<ObjectType>(const SimulationRunner<ObjectType> & )
```


### operator=

```cpp
public SimulationRunner<ObjectType> & operator=(const SimulationRunner<ObjectType> & )
```


### SimulationRunner

```cpp
public void SimulationRunner<ObjectType>()
```


### SimulationRunner

```cpp
public void SimulationRunner<ObjectType>(SimulationRunner<ObjectType> && )
```


### operator=

```cpp
public SimulationRunner<ObjectType> & operator=(SimulationRunner<ObjectType> && )
```


### SimulationRunner

```cpp
public void SimulationRunner<ObjectType>(SimulationContext<ObjectType> && context)
```


### ~SimulationRunner

```cpp
public void ~SimulationRunner<ObjectType>()
```


### run

```cpp
public const ObjectSets<ObjectType> & run(RandomEngine & engine, const index_t steps)
```


### run

```cpp
public StatisticsTracker<ObjectType> run(RandomEngine & engine, const SimulationConfigurator & config)
```


### state_realization

```cpp
public const ObjectSets<ObjectType> & state_realization()
```


### model

```cpp
public const Model<ObjectType> & model()
```




