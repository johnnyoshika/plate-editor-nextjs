'use client';

import { useEffect, useState } from 'react';

import { Value } from '@udecode/plate';
import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';
import { SettingsProvider } from '@/components/editor/settings';
import Sidebar from '@/components/sidebar';
import { useDebounce } from '@/hooks/use-debounce';
import { getLocalState, setLocalState } from '@/lib/localStorage';

const LOCAL_STORAGE_EDITOR_STATE_KEY = 'stored-editor-state';

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, setValue] = useState<Value>([]);
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    const initialValue = getLocalState<Value>(LOCAL_STORAGE_EDITOR_STATE_KEY) ?? [];
    setValue(initialValue);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setLocalState(LOCAL_STORAGE_EDITOR_STATE_KEY, debouncedValue);
  }, [debouncedValue]);

  const onChange = ({value}: { value: Value }) => {
    setValue(value);
  };

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <div className="h-screen w-full flex" data-registry="plate">
      <div className="w-[35%] h-full border-r border-gray-200">
        <Sidebar debugValue={debouncedValue} html="" />
      </div>

      <div className="w-[65%] h-full">
        <SettingsProvider>
          <PlateEditor onChange={onChange} initialValue={value} />
        </SettingsProvider>
      </div>

      <Toaster />
    </div>
  );
}
