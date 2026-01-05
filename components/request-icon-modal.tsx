"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import PrimaryButton from "@/components/ui/primary-button";
import { createIssue } from "@/actions/create-issue";
import { cn } from "@/lib/utils";
import GithubIcon from "@/icons/github-icon";
import SimpleCheckedIcon from "@/icons/simple-checked-icon";
import ExternalLinkIcon from "@/icons/external-link-icon";
import TriangleAlertIcon from "@/icons/triangle-alert-icon";
import XIcon from "@/icons/x-icon";

interface RequestIconModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestIconModal({
  isOpen,
  onClose,
}: RequestIconModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSuccess(null);
      setError(null);
      setLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await createIssue(formData);

      if (result.error) {
        setError(result.error);
      } else if (result.success && result.url) {
        setSuccess(result.url);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !loading && onClose()}
            className={cn(
              "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
              loading && "pointer-events-none",
            )}
          />

          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-background pointer-events-auto max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border shadow-2xl"
            >
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Request an Icon</h2>
                  <button
                    onClick={() => !loading && onClose()}
                    disabled={loading}
                    className="text-muted-foreground hover:text-foreground p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <XIcon size={24} />
                  </button>
                </div>

                {success ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                      <SimpleCheckedIcon size={32} />
                    </div>
                    <h3 className="text-lg font-medium">Request Submitted!</h3>
                    <p className="text-muted-foreground max-w-[80%] text-sm">
                      The issue has been created successfully on GitHub.
                    </p>
                    <a
                      href={success}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary flex items-center gap-2 text-sm font-medium hover:underline"
                    >
                      View Issue <ExternalLinkIcon size={14} />
                    </a>
                    <div className="w-full pt-4">
                      <PrimaryButton onClick={onClose} className="w-full">
                        Close
                      </PrimaryButton>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        Category{" "}
                        <span className="text-muted-foreground">*</span>
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        defaultValue=""
                        className="bg-background ring-offset-background placeholder:text-muted-foreground focus:border-primary flex h-10 w-full rounded-xl border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        <option value="Brand/Logo">Brand / Logo</option>
                        <option value="Interface">Interface</option>
                        <option value="Navigation">Navigation</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Technology">Technology</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="links" className="text-sm font-medium">
                        Reference Links / Description
                      </label>
                      <textarea
                        id="links"
                        name="links"
                        placeholder="Figma links, Dribbble shots, or description of the icon..."
                        className="bg-background ring-offset-background placeholder:text-muted-foreground focus:border-primary flex min-h-[80px] w-full resize-y rounded-xl border px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="handle" className="text-sm font-medium">
                        Your GitHub Handle{" "}
                        <span className="text-muted-foreground font-normal">
                          (Optional)
                        </span>
                      </label>
                      <div className="relative">
                        <span className="text-muted-foreground absolute top-2.5 left-3">
                          @
                        </span>
                        <input
                          id="handle"
                          name="handle"
                          type="text"
                          placeholder="username"
                          className="bg-background ring-offset-background placeholder:text-muted-foreground focus:border-primary flex h-10 w-full rounded-xl border py-2 pr-3 pl-10 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm font-medium text-red-500">
                        <TriangleAlertIcon size={16} />
                        {error}
                      </div>
                    )}

                    <div className="pt-4">
                      <PrimaryButton
                        type="submit"
                        disabled={loading}
                        className="w-full"
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <svg
                              className="mr-3 -ml-1 h-4 w-4 animate-spin text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <GithubIcon className="h-4 w-4" />
                            Submit Request
                          </div>
                        )}
                      </PrimaryButton>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
