# class ProgressLoggerManager

```cpp
Defined at ../../include/geode/basic/progress_logger_manager.h#37
```

## Functions

### ~ProgressLoggerManager

```cpp
public void ~ProgressLoggerManager()
```

```cpp
Defined at /github/workspace/src/geode/basic/progress_logger_manager.cpp#88
```

### register_client

```cpp
public void register_client(std::unique_ptr<ProgressLoggerClient> && client)
```

```cpp
Defined at /github/workspace/src/geode/basic/progress_logger_manager.cpp#90
```

### start

```cpp
public void start(const uuid & progress_logger_id, const std::string & message, index_t nb_steps)
```

```cpp
Defined at /github/workspace/src/geode/basic/progress_logger_manager.cpp#96
```

### update

```cpp
public void update(const uuid & progress_logger_id, index_t current_step, index_t nb_steps)
```

```cpp
Defined at /github/workspace/src/geode/basic/progress_logger_manager.cpp#103
```

### completed

```cpp
public void completed(const uuid & progress_logger_id)
```

```cpp
Defined at /github/workspace/src/geode/basic/progress_logger_manager.cpp#109
```

### failed

```cpp
public void failed(const uuid & progress_logger_id)
```

```cpp
Defined at /github/workspace/src/geode/basic/progress_logger_manager.cpp#114
```



